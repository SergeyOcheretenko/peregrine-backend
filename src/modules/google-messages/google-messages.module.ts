import { Module } from '@nestjs/common';
import { GoogleMessagesController } from './google-messages.controller';
import { GoogleMessagesService } from './google-messages.service';
import { GoogleCredentialsModule } from '../google-credentials/google-credentials.module';

@Module({
  imports: [GoogleCredentialsModule],
  controllers: [GoogleMessagesController],
  providers: [GoogleMessagesService],
})
export class GoogleMessagesModule {}
