import { GoogleCredentials } from '@prisma/client';

export class GoogleCredentialsDto {
  id: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  scope: string;
  expiryDate: number;
  tokenType: string;
  idToken: string;
  picture: string;
  createdAt: Date;
  updatedAt: Date;

  public static fromEntity(entity: GoogleCredentials): GoogleCredentialsDto {
    return {
      id: entity.id,
      email: entity.email,
      accessToken: entity.accessToken,
      refreshToken: entity.refreshToken,
      scope: entity.scope,
      expiryDate: Number(entity.expiryDate),
      tokenType: entity.tokenType,
      idToken: entity.idToken,
      picture: entity.picture,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
