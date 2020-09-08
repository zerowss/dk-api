
import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { RunoobTblController } from './runoobTbl.controller'
import { RunoobTblService } from './runoobTbl.service'
import { runoobTbl as runoobTblEntity } from './runoobTbl.entity'
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([runoobTblEntity])],
    controllers: [RunoobTblController],
    providers: [RunoobTblService]
})

export class RunoobTblModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) { }
}
