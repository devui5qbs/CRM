import {
  Body,
  Controller,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { EmailDto } from 'src/dto/auth.dto';
import { ChangeUserRoleDto, CreateChatDto } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('')
  @UsePipes(new ValidationPipe())
  async getAll(@Body() createDto: EmailDto) {
    return this.userService.getAllUsers(createDto);
  }
  @Put('/role')
  @UsePipes(new ValidationPipe())
  async changeUsersRole(@Body() createDto: ChangeUserRoleDto) {
    return this.userService.changeUsersRole(createDto);
  }



}
