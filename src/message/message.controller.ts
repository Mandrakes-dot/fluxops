import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from './_utils/dtos/message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  saveMessage(@Body() messageDto: MessageDto) {
    return this.messageService.saveMessage(messageDto);
  }

  @Get('/:chatId')
  getAllMessageForChat(@Param('chatId') chatId: string): Promise<MessageDto[]> {
    return this.messageService.getAllMessageForChat(chatId);
  }

  @Put('/delete/:messageId')
  deleteMessage(@Param('messageId') messageId: string): Promise<MessageDto> {
    return this.messageService.deleteMessage(messageId);
  }

  @Put('/update/:chatId')
  updateMessage(@Body() messageDto: MessageDto) {
    return this.messageService.updatedMessage(messageDto);
  }
}
