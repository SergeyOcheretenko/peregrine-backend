import { Module } from '@nestjs/common';
import { PrismaModule } from './integrations/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
})
export class AppModule {}
