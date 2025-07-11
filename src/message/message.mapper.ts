import { MessageDto } from './_utils/dtos/message.dto';
import { Message } from './message.schema';

export class MessageMapper {
  toMapperDto = (message: Message): MessageDto => ({
    sender: message.sender.toString(),
    chat: message.chat.toString(),
    content: message.content,
    isDeleted: message.isDeleted,
  });
}
