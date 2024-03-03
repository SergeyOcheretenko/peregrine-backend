import { Module } from '@nestjs/common';
import { GoogleCredentialsService } from './google-credentials.service';
import { GoogleCredentialsController } from './google-credentials.controller';
import { PrismaModule } from '../../integrations/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [GoogleCredentialsService],
  controllers: [GoogleCredentialsController],
  exports: [GoogleCredentialsService],
})
export class GoogleCredentialsModule {}
