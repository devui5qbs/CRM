import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthDto, EmailDto, RegisterDto } from '../dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  
  async hashKey(key: string) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(key, saltOrRounds);
    return hash;
  }

  async userFind(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }

  async signUp(dto: RegisterDto) {
    const { username, password, email, firstName, lastName } = dto;

    const user = await this.userFind(email);

    if (user) throw new NotFoundException('this email is already taken.');

    const hash = await this.hashKey(password);
    const newUser = {
      username,
      email,
      password: hash,
      autorized: true,
      role: 'client',
      firstName,
      lastName,
    };

    return this.prisma.user.create({
      data: {
        ...newUser,
      },
    });
  }

  async signIn(dto: AuthDto) {
    const { password, email } = dto;

    const user = await this.userFind(email);

    if (!user) throw new NotFoundException('Inavalid mail or password');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new NotFoundException('Inavalid mail or password');
    const userAutorized = await this.prisma.user.update({
      where: { email: user.email },
      data: {
        autorized: true,
      },
    });
    return userAutorized;
  }

  async logOut(dto: EmailDto) {
    const { email } = dto;
    const dbUser = await this.userFind(email);

    await this.prisma.user.update({
      where: { email: dbUser.email },
      data: {
        autorized: false,
      },
    });
    return;
  }
  async getAllUsers(dto: EmailDto) {
    const { email } = dto;
    const user = await this.userFind(email);
    if (user.role === 'client')
      throw new NotFoundException('This user does not have rights');

    const allUsers = await this.prisma.user.findMany();
    return allUsers;
  }
}
