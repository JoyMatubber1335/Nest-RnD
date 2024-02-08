import { Module } from '@nestjs/common';
import { ItemConoroller } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [],
  controllers: [ItemConoroller],
  providers: [ItemService],
})
export class ItemModule {}
