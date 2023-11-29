import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtMiddleware } from 'src/middleware/jwt.middleware';
import { UserGateway } from './user.gateway';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, AuthService, UserGateway],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes(UserController);
  }
}
