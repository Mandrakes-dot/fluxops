import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { ChannelModule } from './channel/channel.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tomluckaczmarek:46yhWt9OyxkSYjaW@fluxops-dev.fonqrr4.mongodb.net/?retryWrites=true&w=majority&appName=fluxops-dev',
    ),
    UserModule,
    ChatModule,
    MessageModule,
    ChannelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
