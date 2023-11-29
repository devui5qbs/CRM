import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UserService } from './user.service';

@WebSocketGateway(3080, { cors: { origin: '*' } })
export class UserGateway {
  constructor(private readonly userService: UserService) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendMessage')
  handleSendMessage(
    client: Socket,
    payload: { room: string; message: string },
  ) {
    const { room, message } = payload;
    this.server.to(payload.room).emit('message', {
      message,
      roomName: room,
      userSocket: client.id,
    });
  }
  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    client: Socket,
    payload: {
      roomName: string;
      userId: string;
      username: string;
    },
  ) {
    const { roomName, userId, username } = payload;
    client.join(roomName);
    this.server.to(roomName).emit('message', {
      message: 'Chat was created',
      roomName: roomName,
      userSocket: client.id,
    });
    this.userService.setChat({
      userSocketId: client.id,
      username,
      userId,
      roomName,
    });
  }
}
