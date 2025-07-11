import { BadRequestException, Injectable } from '@nestjs/common';
import { Message } from './message.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageDto } from './_utils/dtos/message.dto';

@Injectable()
export class MessageRepository {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  async saveMessage(messageDto: MessageDto): Promise<Message> {
    return this.messageModel.create({
      sender: messageDto.sender,
      chat: messageDto.chat || '',
      content: messageDto.content || '',
    });
  }

  async findAllMessageForChat(chatId: string): Promise<Message[]> {
    try {
      return await this.messageModel
        .find({
          chat: chatId,
        })
        .sort({ createdAt: 1 })
        .populate('sender');
    } catch (e) {
      throw new Error(`Failed to get messages for ChatId : ${chatId}`);
    }
  }

  async deleteMessage(messageId: string): Promise<Message> {
    const updated = await this.messageModel.findOneAndUpdate(
      { _id: messageId },
      { $set: { isDeleted: true } },
      { new: true },
    );
    if (!updated) {
      throw new BadRequestException(
        `Failed to delete message ${messageId}`,
      );
    }
    return updated;
  }

  async updateMessage(messageDto: MessageDto): Promise<Message> {
    const updated = await this.messageModel.findOneAndUpdate(
      { _id: messageDto.id },
      {
        $set: {
          sender: messageDto.sender,
          chat: messageDto.chat || '',
          content: messageDto.content || '',
        },
      },
      { new: true },
    );
    if (!updated) {
      throw new BadRequestException('Message not found or already deleted');
    }
    return updated;
  }
}
