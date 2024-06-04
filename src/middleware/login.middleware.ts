import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SimpleLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Executing request...');
    if (req.body.name === 'kokil') {
      console.log('get kokil');
      next();
    } else {
      console.log('No');
    }
  }
}
