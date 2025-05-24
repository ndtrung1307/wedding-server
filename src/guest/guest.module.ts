import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { GuestController } from "./guest.controller";
import { GuestService } from "./guest.service";
import { Guest, GuestSchema } from "./schemas/guest.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Guest.name, schema: GuestSchema }]),
  ],
  controllers: [GuestController],
  providers: [GuestService],
})
export class GuestModule {}
