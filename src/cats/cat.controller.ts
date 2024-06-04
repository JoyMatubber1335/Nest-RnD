import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cat.service';
import { Cat } from './interface/cat.interface';
// import { response } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post('create')
  //@ts-ignore
  async create(
   
    @Req() request: Request,
    @Body() createCatDto: CreateCatDto,
  ) {
    console.log('request', request.body);
   
    this.catsService.create(createCatDto);
  }

  @Get('get')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
