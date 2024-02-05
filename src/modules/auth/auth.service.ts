import { Injectable } from '@nestjs/common';
import { getOAuthClient } from '../../integrations/google/get-oauth-client';
import { LoginRequest } from './request/login.request';

@Injectable()
export class AuthService {
  constructor() {}

  async login(request: LoginRequest) {
    const oAuthClient = await getOAuthClient();
    const url = oAuthClient.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://mail.google.com/',
      ],
      login_hint: request.email,
    });
    return url;
  }
}
