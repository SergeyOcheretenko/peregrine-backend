import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { GoogleCredentialsModule } from '../google-credentials/google-credentials.module';
import { PrismaModule } from '../../integrations/prisma/prisma.module';

@Module({
  imports: [PrismaModule, GoogleCredentialsModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
