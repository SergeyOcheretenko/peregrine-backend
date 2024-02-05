import { IsEmail } from 'class-validator';

export class CreateUserRequest {
  @IsEmail()
  email: string;
}
