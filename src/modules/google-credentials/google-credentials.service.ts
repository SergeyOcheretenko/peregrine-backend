import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../integrations/prisma/prisma.service';
import { GoogleCredentialsDto } from './dto/google-credentials.dto';

@Injectable()
export class GoogleCredentialsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getById(id: string): Promise<GoogleCredentialsDto | null> {
    const account = await this.prismaService.googleCredentials.findUnique({
      where: { id },
    });

    return account ? GoogleCredentialsDto.fromEntity(account) : null;
  }
}
