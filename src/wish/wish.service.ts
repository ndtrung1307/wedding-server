import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Wish, WishDocument } from "./schemas/wish.schema";

@Injectable()
export class WishService {
  constructor(@InjectModel(Wish.name) private wishModel: Model<WishDocument>) {}

  create(data: Partial<Wish>): Promise<Wish> {
    const wish = new this.wishModel(data);
    return wish.save();
  }

  findAll(): Promise<Wish[]> {
    return this.wishModel.find().sort({ createdAt: -1 }).exec();
  }
}
