
import { Controller, Get, Post, HttpCode, Param, Body, Query } from '@nestjs/common'
import { CreateCatDto } from './dot/dto'
import { CatsService } from './cats.service'

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Get('findAll')
    async findAll() {
        return this.catsService.findAll();
    }

    @Post('create')
    async create(@Query() query) {
        
        const res = await this.catsService.create(query)
        console.log(res,'=====')
        return {
            msg: 'success'
        }
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
