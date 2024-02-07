import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../integrations/prisma/prisma.service';
import { CreateUserRequest } from './request/create-user.request';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(request: CreateUserRequest): Promise<UserDto> {
    const user = await this.prismaService.user.create({ data: request });
    await this.prismaService.googleCredentials.create({
      data: {
        userId: user.id,
      },
    });
    return UserDto.fromEntity(user);
  }

  async findById(id: string): Promise<UserDto | null> {
    const user = await this.prismaService.user.findUnique({ where: { id } });
    return user ? UserDto.fromEntity(user) : null;
  }

  async findByEmail(email: string): Promise<UserDto | null> {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    return user ? UserDto.fromEntity(user) : null;
  }
}
