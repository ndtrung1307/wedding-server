import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type WishDocument = Wish & Document;

@Schema({ timestamps: true })
export class Wish {
  @Prop({ required: true })
  senderName: string;

  @Prop({ required: true })
  relationship: string;

  @Prop()
  organization?: string;

  @Prop({ required: true })
  message: string;

  @Prop({ default: Date.now })
  sentAt: Date;
}

export const WishSchema = SchemaFactory.createForClass(Wish);
