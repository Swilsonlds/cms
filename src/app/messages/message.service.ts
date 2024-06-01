import { MOCKMESSAGES } from "./MOCKMESSAGES";
import { Message } from "./message.model";
import { EventEmitter } from "@angular/core";

export class MessageService {
  messages = [];
  messageChangedEvent: EventEmitter<Message[]> = new EventEmitter<Message[]>();

  constructor() {
    this.messages = MOCKMESSAGES
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }
  
  getMessage(id: string): Message | null {
    for (const contact of this.messages) {
        if (contact.id === id) {
            return contact;
        }
    }
    return null;
  } 

  addMessage(message:Message) {
    this.messages.push(message);
    this.messageChangedEvent.emit(this.messages.slice());
  }
}