import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { CatsController } from './cats.controller'
import { CatsService } from './cats.service'

@Module({
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
})

export class CatsModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) { }
}
