import { Injectable } from '@nestjs/common';
import { CreateAgenceDto } from './dto/create-agence.dto';
import { UpdateAgenceDto } from './dto/update-agence.dto';

@Injectable()
export class AgenceService {
  create(createAgenceDto: CreateAgenceDto) {
    return 'This action adds a new agence';
  }

  findAll() {
    return `This action returns all agence`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agence`;
  }

  update(id: number, updateAgenceDto: UpdateAgenceDto) {
    return `This action updates a #${id} agence`;
  }

  remove(id: number) {
    return `This action removes a #${id} agence`;
  }
}
