import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats.controller';
import { AppService } from './app.service';
import { CatsService } from './cats.service';
import { ItemConoroller } from './Items/item.controller';
@Module({
  imports: [],
  controllers: [AppController, CatsController, ItemConoroller],
  providers: [AppService, CatsService],
})
export class AppModule {}
