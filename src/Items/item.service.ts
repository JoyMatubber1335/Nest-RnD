import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemService {
  private readonly items: Item[] = [
    {
      id: '1',
      name: 'joy',
      qty: 12,
      description: 'This is item joy',
    },
    {
      id: '2',
      name: 'rana',
      qty: 22,
      description: 'This is item rana',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
  delete(id: string): Item {
    return this.items.find((item) => item.id !== id);
  }
}
