// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { CreateDto } from './dto/crate-item.dto';
// import { ItemService } from './item.service';
// import { Item } from './interfaces/item.interface';

// @Controller('items')
// export class ItemConoroller {
//   constructor(private readonly itemService: ItemService) {}
//   @Get('All')
//   async findAll(): Promise<Item[]> {
//     return this.itemService.findAll();
//   }
//   @Get('single/:id')
//   async findOne(@Param('id') id): Promise<Item> {
//     return this.itemService.findOne(id);
//   }
//   @Post('add')
//   create(@Body() createDto: CreateDto): string {
//     return `Name is  ${createDto.name} and age ${createDto.age}`;
//   }

//   // @Delete('Delete/:id')
//   // delete(@Param('id') id): Item {
//   //   return this.itemService.delete(id);
//   // }

//   @Put('update/:id')
//   update(@Body() updateDto: CreateDto, @Param('id') id): string {
//     return `Update id is ${id}- name is ${updateDto.name}`;
//   }
// }
