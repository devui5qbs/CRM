import { MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class UsersGateway {
  @SubscribeMessage('newUser')
  newUser(@MessageBody() body:any) {
    console.log(body);
    
  }
}
