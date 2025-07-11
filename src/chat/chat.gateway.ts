import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SendMessageDto } from '../message/_utils/dtos/send-message.dto';
import { MessageService } from '../message/message.service';

@WebSocketGateway(3002)
export class ChatGateway {
  constructor(private messageService: MessageService) {}

  @WebSocketServer() server: Server;

  handleConnection(socket: Socket) {
    //todo implement token authorization here
  }

  @SubscribeMessage('chat')
  async handleMessage(socket: SocketWithUser, payLoad: SendMessageDto) {
    const { chat, message } = payLoad;

    const saved = await this.messageService.saveMessage({
      sender: socket.data.user.id,
      chat: chat,
      content: message,
    });

    this.server.to(chat).emit('message', {
      user: socket.data.user,
      chat: chat,
      message: saved.content,
    });
  }
}

export interface UserPayload {
  id: string;
  username: string;
}

export interface SocketWithUser extends Socket {
  data: {
    user: UserPayload;
  };
}
