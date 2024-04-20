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
}
