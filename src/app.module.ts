import { Module } from '@nestjs/common';
import { PrismaModule } from './integrations/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { GoogleCredentialsModule } from './modules/google-credentials/google-credentials.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, GoogleCredentialsModule],
})
export class AppModule {}
