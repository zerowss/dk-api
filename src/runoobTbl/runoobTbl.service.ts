/*
 * @Author: your name
 * @Date: 2020-09-07 18:05:51
 * @LastEditTime: 2020-09-08 09:58:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /dk-api/src/runoobTbl/runoobTbl.service.ts
 */


import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { runoobTbl as runoobTblEntity } from './runoobTbl.entity'
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class RunoobTblService {
  constructor(
    @InjectRepository(runoobTblEntity)
    private runoobTblRepository: Repository<runoobTblEntity>,
  ) { } 

  findAll(): Promise<runoobTblEntity[]> {
    return this.runoobTblRepository.find();
  }
}
