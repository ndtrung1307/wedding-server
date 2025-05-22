import { Body, Controller, Get, Post } from "@nestjs/common";
import { WishService } from "./wish.service";

@Controller("wishes")
export class WishController {
  constructor(private readonly wishService: WishService) {}

  @Post()
  create(@Body() body: any) {
    return this.wishService.create(body);
  }

  @Get()
  findAll() {
    return this.wishService.findAll();
  }
}
