import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contacts.service';

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  constructor(private contactService: ContactService){}
  selectedContact: Contact;

  ngOnInit(): void {
    this.contactService.contactSelectedEvent.subscribe(
      (contact: Contact) => {
        this.selectedContact = contact;
      }
    );
  }
}
