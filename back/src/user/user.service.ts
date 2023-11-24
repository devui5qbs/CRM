import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { EmailDto } from 'src/dto/auth.dto';
import { ChangeUserRoleDto } from 'src/dto/user.dto';
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
    if (role != 'client' && role !== 'admin')
      throw new NotFoundException('Invalid users role');
    const user = await this.prisma.user.update({
      where: { email },
      data: { role },
    });
    return user;
  }
}
