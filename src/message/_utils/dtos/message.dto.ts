import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { Nullable } from 'class-validator-extended';

export class MessageDto {
  @IsOptional()
  @IsString()
  id?: string;

  @Nullable()
  @IsString()
  @IsNotEmpty()
  sender: string;

  @Nullable()
  @IsString()
  @IsNotEmpty()
  chat: string;

  @Nullable()
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsBoolean()
  isDeleted?: boolean = false;
}
