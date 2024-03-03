import { Body, Controller, Get, Post, Query, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequest } from './request/login.request';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/google/login')
  async login() {
    return this.authService.login();
  }

  @Get('/google/callback')
  async googleCallback(@Query('code') code: string, @Response() response: any) {
    const account = await this.authService.googleCallback(code);

    response.cookie('account', account.id, { httpOnly: false });

    response.redirect('http://localhost:3000');
  }
}
