import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UsersGateway } from './users/users.gateway';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService, UsersGateway],
})
export class AppModule {}
