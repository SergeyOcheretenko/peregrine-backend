import { User } from '@prisma/client';

export class UserDto {
  public id: string;
  public email: string;
  public name: string;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }

  static fromEntity(user: User): UserDto {
    return new UserDto({
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  }
}
