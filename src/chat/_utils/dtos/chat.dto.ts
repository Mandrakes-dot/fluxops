import { Types } from 'mongoose';

export class ChatDto {
  id: string;

  creatordId: Types.ObjectId;

  invitedUserId: [Types.ObjectId];

  message: string;

  isDeleted: boolean;

  createdAt: Date;

  modifiedAt: Date;

  isPrivate: boolean;
}
