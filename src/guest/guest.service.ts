import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateGuestDto } from "./dto/create-guest.dto";
import { Guest, GuestDocument } from "./schemas/guest.schema";

@Injectable()
export class GuestService {
  constructor(
    @InjectModel(Guest.name) private guestModel: Model<GuestDocument>
  ) {}

  async create(createGuestDto: CreateGuestDto): Promise<Guest> {
    const createdGuest = new this.guestModel(createGuestDto);
    return createdGuest.save();
  }
}
