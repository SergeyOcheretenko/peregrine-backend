import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../integrations/prisma/prisma.service';
import { CreateUserRequest } from './request/create-user.request';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(request: CreateUserRequest): Promise<User> {
    const user = await this.prismaService.user.create({ data: request });
    await this.prismaService.googleCredentials.create({
      data: {
        userId: user.id,
      },
    });
    return user;
  }

  async findById(id: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { email } });
  }
}
