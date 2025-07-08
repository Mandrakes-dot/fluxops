import { Prop, Schema } from '@nestjs/mongoose';


@Schema()
export class Channel {
  @Prop({required: true})
  name: string;

  @Prop({required: true})
  description: string;

  @Prop({required: true})
  created_at: Date;
}