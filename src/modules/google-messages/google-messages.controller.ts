import { Controller, Get, Param } from '@nestjs/common';
import { GoogleMessagesService } from './google-messages.service';

@Controller('google-messages')
export class GoogleMessagesController {
  constructor(private readonly googleMessagesService: GoogleMessagesService) {}

  @Get(':credentialsId/inbox-messages/:amount')
  async listLastMessages(
    @Param('credentialsId') credentialsId: string,
    @Param('amount') amount: number,
  ) {
    return this.googleMessagesService.listInboxMessages(credentialsId, amount);
  }

  @Get(':credentialsId/spam-messages/:amount')
  async listSpamMessages(
    @Param('credentialsId') credentialsId: string,
    @Param('amount') amount: number,
  ) {
    return this.googleMessagesService.listSpamMessages(credentialsId, amount);
  }

  @Get(':credentialsId/starred-messages/:amount')
  async listStarredMessages(
    @Param('credentialsId') credentialsId: string,
    @Param('amount') amount: number,
  ) {
    return this.googleMessagesService.listStarredMessages(
      credentialsId,
      amount,
    );
  }
}
