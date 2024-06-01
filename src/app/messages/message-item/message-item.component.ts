import { Component, Input } from '@angular/core';
import { Message } from '../message.model';
import { ContactService } from '../../contacts/contacts.service';
import { Contact } from '../../contacts/contact.model';

@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css'
})

export class MessageItemComponent {
  constructor(private contactService: ContactService) { }

  messageSender: string;

  @Input() message: Message;

  ngOnInit() {
    const contact: Contact = this.contactService.getContact(this.message.sender);
    this.messageSender = contact.name;
 }
}
