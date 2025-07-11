import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Chat {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  creatorId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  invitedUser: Types.ObjectId[];

  @Prop({ required: false })
  message: string;

  @Prop({})
  isDeleted: boolean;

  @Prop({})
  createdAt: Date;

  @Prop({})
  modified_at: Date;

  @Prop({})
  isPrivate: boolean;
}