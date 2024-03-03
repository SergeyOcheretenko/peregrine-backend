import { Injectable } from '@nestjs/common';
import { getOAuthClient } from '../../integrations/google/get-oauth-client';
import { PrismaService } from '../../integrations/prisma/prisma.service';
import { GoogleCredentials } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async login() {
    const oAuthClient = await getOAuthClient();
    const url = oAuthClient.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://mail.google.com/',
        'https://www.googleapis.com/auth/userinfo.profile',
      ],
      // login_hint: request.email,
      // prompt: 'consent',
    });
    return { url };
  }

  async googleCallback(code: string) {
    const oAuthClient = await getOAuthClient();
    const { tokens } = await oAuthClient.getToken(code);
    oAuthClient.setCredentials(tokens);
    const loginTicket = await oAuthClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = loginTicket.getPayload();

    const existingAccount =
      await this.prismaService.googleCredentials.findUnique({
        where: { email: payload.email },
      });

    let account: GoogleCredentials;

    if (!existingAccount) {
      account = await this.prismaService.googleCredentials.create({
        data: {
          email: payload.email,
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token,
          scope: tokens.scope,
          tokenType: tokens.token_type,
          expiryDate: tokens.expiry_date,
          picture: payload.picture,
        },
      });
    } else {
      account = await this.prismaService.googleCredentials.update({
        where: { email: payload.email },
        data: {
          accessToken: tokens.access_token,
          refreshToken: tokens.refresh_token,
          scope: tokens.scope,
          tokenType: tokens.token_type,
          expiryDate: tokens.expiry_date,
          picture: payload.picture,
        },
      });
    }

    // generate jwt

    return account;
  }
}
