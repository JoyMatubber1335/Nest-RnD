import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDto } from './crate-item.dto';
import { get } from 'https';
@Controller('items')
export class ItemConoroller {
  @Get('All')
  findAll(): string {
    return 'Get all item';
  }
  @Get('single/:id')
  findOne(@Param('id') id): string {
    return `item ${id}`;
  }
  @Post('add')
  create(@Body() createDto: CreateDto): string {
    return `Name is  ${createDto.name} and age ${createDto.age}`;
  }

  @Delete('Delete/:id')
  delete(@Param('id') id): string {
    return `delete id is ${id}`;
  }

  @Put('update/:id')
  update(@Body() updateDto: CreateDto, @Param('id') id): string {
    return `Update id is ${id}- name is ${updateDto.name}`;
  }
}
