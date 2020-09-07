import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service'
import { Cats } from './cats.entity'
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Cats])],
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
})

export class CatsModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) { }
}
