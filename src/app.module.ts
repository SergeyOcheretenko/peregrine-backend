import { Module } from '@nestjs/common';
import { PrismaModule } from './integrations/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { GoogleCredentialsModule } from './modules/google-credentials/google-credentials.module';
import { GoogleMessagesModule } from './modules/google-messages/google-messages.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    GoogleCredentialsModule,
    GoogleMessagesModule,
  ],
})
export class AppModule {}
