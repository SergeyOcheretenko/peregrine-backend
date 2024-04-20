import { google } from 'googleapis';
import { GoogleCredentialsService } from '../google-credentials/google-credentials.service';
import { getOAuthClient } from '../../integrations/google/get-oauth-client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleMessagesService {
  constructor(
    private readonly googleCredentialsService: GoogleCredentialsService,
  ) {}

  async listLastMessages(credentialsId: string, amount: number) {
    const credentials =
      await this.googleCredentialsService.getById(credentialsId);

    if (!credentials) {
      console.error('Credentials not found.');
      return;
    }

    const oAuthClient = await getOAuthClient({
      access_token: credentials.accessToken,
      refresh_token: credentials.refreshToken,
      scope: credentials.scope,
      token_type: credentials.tokenType,
      expiry_date: credentials.expiryDate,
    });

    const gmail = google.gmail({
      version: 'v1',
      auth: oAuthClient,
    });

    try {
      // List the last 10 messages from the user's inbox
      const res = await gmail.users.messages.list({
        userId: 'me',
        maxResults: amount,
      });

      const messages = res.data.messages;

      if (!messages || messages.length === 0) {
        console.log('No messages found.');
        return;
      }

      const messagesDetails = [];

      for (const message of messages) {
        // Fetch each message by its ID
        const messageDetails = await gmail.users.messages.get({
          userId: 'me',
          id: message.id,
          format: 'full', // Ensure full message details are fetched
        });

        messagesDetails.push(messageDetails);

        const headers = messageDetails.data.payload.headers;

        // Find subject and sender in headers
        const subject = headers.find((header) => header.name === 'Subject');
        const from = headers.find((header) => header.name === 'From');

        console.log('==============================');
        console.log('Headers', headers);
        console.log('Details', messageDetails);
        console.log('==============================');

        // console.log(`- Subject: ${subject ? subject.value : 'N/A'}`);
        // console.log(`  From: ${from ? from.value : 'N/A'}`);
        // console.log(`  Date: ${messageDetails.data.internalDate}`);
      }

      return messagesDetails;
    } catch (error) {
      console.error('Error listing messages:', error.message);
    }
  }

  async listStarredMessages(credentialsId: string, amount: number) {
    const credentials =
      await this.googleCredentialsService.getById(credentialsId);

    if (!credentials) {
      console.error('Credentials not found.');
      return;
    }

    const oAuthClient = await getOAuthClient({
      access_token: credentials.accessToken,
      refresh_token: credentials.refreshToken,
      scope: credentials.scope,
      token_type: credentials.tokenType,
      expiry_date: credentials.expiryDate,
    });

    const gmail = google.gmail({
      version: 'v1',
      auth: oAuthClient,
    });

    try {
      const res = await gmail.users.messages.list({
        userId: 'me',
        labelIds: ['STARRED'], // Fetching starred messages
        maxResults: amount,
      });

      const messages = res.data.messages;

      if (!messages || messages.length === 0) {
        console.log('No starred messages found.');
        return;
      }

      const messagesDetails = [];

      for (const message of messages) {
        const messageDetails = await gmail.users.messages.get({
          userId: 'me',
          id: message.id,
          format: 'full',
        });

        messagesDetails.push(messageDetails);

        const headers = messageDetails.data.payload.headers;
        const subject = headers.find((header) => header.name === 'Subject');
        const from = headers.find((header) => header.name === 'From');

        console.log('==============================');
        console.log('Headers', headers);
        console.log('Details', messageDetails);
        console.log('==============================');
      }

      return messagesDetails;
    } catch (error) {
      console.error('Error listing starred messages:', error.message);
    }
  }

  async listSpamMessages(credentialsId: string, amount: number) {
    const credentials =
      await this.googleCredentialsService.getById(credentialsId);

    if (!credentials) {
      console.error('Credentials not found.');
      return;
    }

    const oAuthClient = await getOAuthClient({
      access_token: credentials.accessToken,
      refresh_token: credentials.refreshToken,
      scope: credentials.scope,
      token_type: credentials.tokenType,
      expiry_date: credentials.expiryDate,
    });

    const gmail = google.gmail({
      version: 'v1',
      auth: oAuthClient,
    });

    try {
      const res = await gmail.users.messages.list({
        userId: 'me',
        labelIds: ['SPAM'], // Fetching spam messages
        maxResults: amount,
      });

      const messages = res.data.messages;

      if (!messages || messages.length === 0) {
        console.log('No spam messages found.');
        return;
      }

      const messagesDetails = [];

      for (const message of messages) {
        const messageDetails = await gmail.users.messages.get({
          userId: 'me',
          id: message.id,
          format: 'full',
        });

        messagesDetails.push(messageDetails);

        const headers = messageDetails.data.payload.headers;
        const subject = headers.find((header) => header.name === 'Subject');
        const from = headers.find((header) => header.name === 'From');

        console.log('==============================');
        console.log('Headers', headers);
        console.log('Details', messageDetails);
        console.log('==============================');
      }

      return messagesDetails;
    } catch (error) {
      console.error('Error listing spam messages:', error.message);
    }
  }

  async listInboxMessages(credentialsId: string, amount: number) {
    const credentials =
      await this.googleCredentialsService.getById(credentialsId);

    if (!credentials) {
      console.error('Credentials not found.');
      return;
    }

    const oAuthClient = await getOAuthClient({
      access_token: credentials.accessToken,
      refresh_token: credentials.refreshToken,
      scope: credentials.scope,
      token_type: credentials.tokenType,
      expiry_date: credentials.expiryDate,
    });

    const gmail = google.gmail({
      version: 'v1',
      auth: oAuthClient,
    });

    try {
      // List the last `amount` messages from the user's inbox
      const res = await gmail.users.messages.list({
        userId: 'me',
        maxResults: amount,
      });

      const messages = res.data.messages;

      if (!messages || messages.length === 0) {
        console.log('No messages found in inbox.');
        return;
      }

      const messagesDetails = [];

      for (const message of messages) {
        const messageDetails = await gmail.users.messages.get({
          userId: 'me',
          id: message.id,
          format: 'full', // Ensure full message details are fetched
        });

        messagesDetails.push(messageDetails);

        const headers = messageDetails.data.payload.headers;
        const subject = headers.find((header) => header.name === 'Subject');
        const from = headers.find((header) => header.name === 'From');

        console.log('==============================');
        console.log('Headers', headers);
        console.log('Details', messageDetails);
        console.log('==============================');
      }

      return messagesDetails;
    } catch (error) {
      console.error('Error listing inbox messages:', error.message);
    }
  }
}
