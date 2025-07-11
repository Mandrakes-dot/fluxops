import { MessageRepository } from './message.repository';
import { Injectable } from '@nestjs/common';
import { MessageDto } from './_utils/dtos/message.dto';
import { MessageMapper } from './message.mapper';

@Injectable()
export class MessageService {
  constructor(
    private messageRepository: MessageRepository,
    private messageMapper: MessageMapper,
  ) {}

  async saveMessage(messageDto: MessageDto) {
    return this.messageRepository.saveMessage(messageDto);
  }

  async getAllMessageForChat(chatId: string): Promise<MessageDto[]> {
    const messages = await this.messageRepository.findAllMessageForChat(chatId);
    return messages.map((message) => this.messageMapper.toMapperDto(message));
  }

  async deleteMessage(messageId: string): Promise<MessageDto> {
    const updated = await this.messageRepository.deleteMessage(messageId);
    return this.messageMapper.toMapperDto(updated);
  }

  async updatedMessage(messageDto: MessageDto): Promise<MessageDto> {
    const updated = await this.messageRepository.updateMessage(messageDto);
    return this.messageMapper.toMapperDto(updated);
  }
}
