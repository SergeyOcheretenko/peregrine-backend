import { Module } from '@nestjs/common';
import { GoogleCredentialsService } from './google-credentials.service';

@Module({
  providers: [GoogleCredentialsService],
  exports: [GoogleCredentialsService],
})
export class GoogleCredentialsModule {}
