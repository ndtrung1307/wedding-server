import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Wish, WishSchema } from "./schemas/wish.schema";
import { WishController } from "./wish.controller";
import { WishService } from "./wish.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Wish.name, schema: WishSchema }]),
  ],
  controllers: [WishController],
  providers: [WishService],
})
export class WishModule {}
