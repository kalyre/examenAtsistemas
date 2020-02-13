import { Injectable } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private message: Observable<Message>;
  
  constructor(private http: HttpClient) { }

  public getAllMessages() {
    return this.http.get(`${environment.restUrl}/messages`);
  }

  public getMessages() {
    this.message = webSocket(`${environment.wsUrl}/messages`);
    return this.message;
  }

  public postMessages(nick: string, message: string) {
    const data = {
      "user": nick,
      "text": message
    }

    this.http.post(`${environment.restUrl}/messages`, data)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });
  }
}

