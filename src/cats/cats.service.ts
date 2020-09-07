/*
 * @Author: your name
 * @Date: 2020-09-03 15:04:05
 * @LastEditTime: 2020-09-04 18:14:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /dk-api/src/cats/cats.service.ts
 */
import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { Connection,Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(private connection: Connection) {}
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
