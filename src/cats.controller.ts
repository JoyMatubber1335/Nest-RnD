import {
  Controller,
  Get,
  Post,
  //   Redirect,
  Header,
  HttpCode,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Post()
  create(): string {
    return 'The cate was born';
  }

  @Get('findData')
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  findAll(): string {
    return this.catsService.getHello();
  }
}
