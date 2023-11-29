import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { EmailDto } from 'src/dto/auth.dto';
import {
  ChangeUserRoleDto,
  CreateChatDto,
  CreateMessageDto,
} from 'src/dto/user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly authService: AuthService,
  ) {}

  async getAllUsers(dto: EmailDto) {
    const { email } = dto;
    const user = await this.authService.userFind(email);
    if (user.role === 'client')
      throw new NotFoundException('This user does not have rights');

    const allUsers = await this.prisma.user.findMany();
    return allUsers;
  }
  async changeUsersRole(dto: ChangeUserRoleDto) {
    const { email, role } = dto;
    const user = await this.authService.userFind(email);
    if (user.role != 'admin')
      throw new NotFoundException('This user does not have rights');
    if (role != 'client' && role !== 'admin')
      throw new NotFoundException('Invalid users role');
    return await this.prisma.user.update({
      where: { email },
      data: { role },
    });
  }
  async setChat(dto: CreateChatDto) {
    const { username, userId, roomName } = dto;
    console.log(dto);
    // 6567386c0d83473f7cd1ab2c
    const test = await this.prisma.chats.create({
      data: {
        username,
        userId,
        chatName: roomName,
      },
    });
    console.log(test);
    return test;
  }
  async setMessage(dto: CreateMessageDto) {
    const { chatsId, content, userId } = dto;
    return this.prisma.message.create({
      data: {
        chatsId,
        content,
        userId,
      },
    });
  }
}
