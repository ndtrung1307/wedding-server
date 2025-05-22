import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { WishModule } from "./wish/wish.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://ndtrung:EiM5Lr1rUKNNCh2m@cluster0.94cko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    ),
    WishModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
