import * as fs from 'fs/promises';
import { GOOGLE_CREDENTIALS_PATH } from '../../common/constants/paths';
import { google } from 'googleapis';
import { OAuth2Client, Credentials } from 'google-auth-library';

export async function getOAuthClient(
  token?: Credentials,
): Promise<OAuth2Client> {
  const content = await fs.readFile(GOOGLE_CREDENTIALS_PATH, 'utf-8');
  const credentials = JSON.parse(content);
  const { client_secret, client_id, redirect_uris } = credentials.web;

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0],
  );
  if (token) {
    oAuth2Client.setCredentials(token);
  }

  return oAuth2Client;
}
