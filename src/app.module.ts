import { Module } from '@nestjs/common';
import { PrismaModule } from './integrations/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { GoogleCredentialsModule } from './modules/google-credentials/google-credentials.module';

@Module({
  imports: [PrismaModule, AuthModule, GoogleCredentialsModule],
})
export class AppModule {}
