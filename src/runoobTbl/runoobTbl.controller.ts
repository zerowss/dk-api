
import { Controller, Get, Post, HttpCode, Param, Body, Query } from '@nestjs/common'
import { RunoobTblService  } from './runoobTbl.service'

@Controller('runoobTal')
export class RunoobTblController {
    constructor(private runoobTblService: RunoobTblService) { }

    @Get('findAll')
    async findAll() {
        return this.runoobTblService.findAll();
    }
}
