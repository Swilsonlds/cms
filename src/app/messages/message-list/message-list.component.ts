import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  messages: Message[] = [
    new Message('1', 'Test Subject 1', 'This is the first test message.', 'Sender1'),
    new Message('2', 'Test Subject 2', 'This is the second test message.', 'Sender2'),
    new Message('3', 'Test Subject 3', 'This is the third test message.', 'Sender3')
  ];

  constructor() { }

  ngOnInit(): void { }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
