import { Body, Controller, Post } from "@nestjs/common";
import { CreateGuestDto } from "./dto/create-guest.dto";
import { GuestService } from "./guest.service";

@Controller("guest")
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Post()
  async createGuest(@Body() createGuestDto: CreateGuestDto) {
    const guest = await this.guestService.create(createGuestDto);
    return {
      message: "Guest information has been saved.",
      guest,
    };
  }
}
