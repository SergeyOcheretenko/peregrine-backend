import { Controller, Get, Param } from '@nestjs/common';
import { GoogleCredentialsService } from './google-credentials.service';
import { GoogleCredentialsDto } from './dto/google-credentials.dto';

@Controller('google-credentials')
export class GoogleCredentialsController {
  constructor(
    private readonly googleCredentialsService: GoogleCredentialsService,
  ) {}

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<GoogleCredentialsDto | null> {
    return this.googleCredentialsService.getById(id);
  }
}
