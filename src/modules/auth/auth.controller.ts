import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest } from './request/login.request';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('google/login')
  async login(@Body() request: LoginRequest) {
    return this.authService.login(request);
  }

  @Get('google/callback')
  async googleCallback(@Query() code: string) {}
}
