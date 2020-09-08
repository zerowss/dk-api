
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatsModule } from './cats/cats.module'
import {RunoobTblModule} from './runoobTbl/runoobTbl.module'
import { TypeOrmModule } from '@nestjs/typeorm'
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CatsModule,
    RunoobTblModule
  ]
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) { }
}
