import { Component } from '@angular/core';
import { Contact } from '../../contact.model';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})

export class ContactItemComponent {
  contacts: Contact[] = [
    new Contact(1,"R. Kent Jackson", "jacksonk@byui.edu","253-496-3771", "../../assets/images/jacksonk.jpg",null ),
    new Contact(2, "Rex Barzee", "barzeer@byui.edu", "208-496-3768","../../assets/images/barzeer.jpg",null)
  ]
}
