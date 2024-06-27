import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { addDays } from 'date-fns';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}
  async create(createItemDto: CreateItemDto): Promise<Item> {
    const { active_time, ...dto } = createItemDto;
    const daysToAdd = parseInt(active_time, 10);

    const currentDate = new Date();

    const end_sell_date = addDays(currentDate, daysToAdd);
    const item = await this.itemRepository.create({ ...dto, end_sell_date });
    return await this.itemRepository.save(item);
  }

  async findAll() {
    return await this.itemRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  async remove(id: number): Promise<Item> {
    const item = await this.itemRepository.findOneOrFail({ where: { id } });
    return await this.itemRepository.remove(item);
  }
}
