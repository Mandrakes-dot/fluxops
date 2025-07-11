import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageRepository } from './message.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './message.schema';
import { MessageController } from './message.controller';
import { MessageMapper } from './message.mapper';

@Module({
  controllers: [MessageController],
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  providers: [MessageService, MessageRepository, MessageMapper],
  exports: [MessageService],
})
export class MessageModule {}