import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type GuestDocument = Guest & Document;

@Schema()
export class Guest {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  numberOfPeople: number;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  willAttend: boolean;
}

export const GuestSchema = SchemaFactory.createForClass(Guest);
