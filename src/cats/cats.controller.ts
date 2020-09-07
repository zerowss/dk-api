
import { Controller, Get, Post, HttpCode, Param, Body, Query } from '@nestjs/common'
import { CreateCatDto } from './dot/dto'
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Post('create')
    create(@Query() query): string {
        console.log(query,'=====')
        return `This action adds a ${query.name} cat`
    }

    @Get('getone')
    getOne(@Query() query): string {
        return `This action returns a ${query.id} cat`
    }

    @Post('createNew')
    async createNew(@Body() createCatDto: CreateCatDto): Promise<string> {
        return 'This action addssdsdsds a new cat';
    }

    @Get(':id')
    findOne(@Param() params): string {
        return `This action returns a #${params.id} cat`
    }
}
