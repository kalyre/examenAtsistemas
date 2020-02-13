import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  public message: string;
  public chatMessages: string[] = [];
  public prueba: Message[];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getMessages().subscribe(
      msg => this.chatMessages.push(msg.text), // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );

    this.loadAllMessages();
    console.log(this.prueba);
  }


  loadAllMessages() {
    this.chatService.getAllMessages().subscribe((messageList: Message[]) =>
      this.prueba = [...messageList]
    );
  }

  sendMessage() {
    this.chatService.postMessages('Jesús', this.message);
  }
}
