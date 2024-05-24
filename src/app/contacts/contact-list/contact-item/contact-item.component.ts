import { Input } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../contact.model';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})

export class ContactItemComponent {

  @Input() contact: Contact;
  @Output() selectedContact = new EventEmitter<Contact>();

  onSelected(contact: Contact): void {
    this.selectedContact.emit(contact);
  }
}
