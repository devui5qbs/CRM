import { Controller, Put, Post, ValidationPipe } from '@nestjs/common';
import { Body, UsePipes } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { AuthDto, EmailDto, RegisterDto } from '../dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  @UsePipes(new ValidationPipe())
  async createUser(@Body() createDto: RegisterDto) {
    return this.authService.signUp(createDto);
  }
  @Post('signin')
  @UsePipes(new ValidationPipe())
  async checkUser(@Body() createDto: AuthDto) {
    return this.authService.signIn(createDto);
  }
  @Put('logout')
  @UsePipes(new ValidationPipe())
  async logOut(@Body() createDto: EmailDto) {
    return this.authService.logOut(createDto);
  }
  @Post('test')
  @UsePipes(new ValidationPipe())
  async getUsetFromTokenText(@Body() createDto: { token: string }) {
    return this.authService.getUsetFromTokenText(createDto);
  }

  @Post('test2')
  @UsePipes(new ValidationPipe())
  async getUset(@Body() createDto: { email: string }) {
    const { email } = createDto;
    return this.authService.userFind(email);
  }
}
