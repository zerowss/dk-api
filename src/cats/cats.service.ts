
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cats } from './cats.entity'
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cats)
    private catsRepository: Repository<Cats>,
  ) { }

  create(cat: Cats) {
    this.catsRepository.save(cat);
  }

  findAll(): Promise<Cats[]> {
    return this.catsRepository.find();
  }
}
