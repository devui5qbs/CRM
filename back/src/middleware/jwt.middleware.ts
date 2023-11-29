import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const { headers } = req;
    const { authorization, } = headers;

    if (!authorization) {
      return res.status(401).send('Unauthorized');
    }

    try {
      const verify = await this.jwtService.verify(authorization.slice(7));
      next();
    } catch (error) {
      console.error('JWT verification failed:', error.message);
      return res.status(401).send('Unauthorized');
    }
    next()
  }
}
