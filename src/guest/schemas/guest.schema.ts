import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type GuestDocument = Guest & Document;

@Schema()
export class Guest {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  relationship: string;

  @Prop({ required: true })
  willAttend: boolean;

  @Prop({})
  numberOfPeople: number;

  @Prop({})
  location: string;
}

export const GuestSchema = SchemaFactory.createForClass(Guest);
