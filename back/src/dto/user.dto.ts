import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ChangeUserRoleDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  role: string;
}

export class CreateChatDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  roomName:string

  @IsString()
  @IsNotEmpty()
  userSocketId:string
}
export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  chatsId: string;

  @IsString()
  @IsNotEmpty()
  socketId: string;
}

export class CreateSoketDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  chatsId: string;

  @IsString()
  @IsNotEmpty()
  socketId: string;
}

export class setUserSoketIdDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  socketId:string
}