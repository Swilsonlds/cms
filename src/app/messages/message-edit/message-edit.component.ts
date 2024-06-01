import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Message } from '../message.model';
import { Contact } from '../../contacts/contact.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {
  constructor(private messageService: MessageService) {}
  
  @ViewChild('subject', { static: true }) subjectInputRef: ElementRef;
  @ViewChild('msgText', { static: true }) msgTextInputRef: ElementRef;

  @Output() addMessageEvent = new EventEmitter<Message>();

  currentSender: string = '0';

  onSendMessage() {
    const subjectValue = this.subjectInputRef.nativeElement.value;
    const msgTextValue = this.msgTextInputRef.nativeElement.value;

    const newMessage = new Message(
      '1',
      subjectValue,
      msgTextValue,
      this.currentSender
    );

    this.messageService.addMessage(newMessage)
  }

  onClear() {
    this.subjectInputRef.nativeElement.value = '';
    this.msgTextInputRef.nativeElement.value = '';
  }
}
