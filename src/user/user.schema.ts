import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  lastLogin: Date;

  @Prop({ required: true })
  isOnline: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
