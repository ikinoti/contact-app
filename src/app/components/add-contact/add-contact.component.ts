import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/Contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  @Output() onAddContact: EventEmitter<Contact> = new EventEmitter();

  name: any;
  contact: any;
  email: any;
  location: any;
  meetPlace: any;
  showAddContact: any;
  subscription: any;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddContact = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('Please add a name!');
      return;
    }

    const newContact = {
      name: this.name,
      contact: this.contact,
      email: this.email,
      location: this.location,
      meetPlace: this.meetPlace,
    };

    this.onAddContact.emit(newContact);

    this.name = '';
    this.contact = '';
    this.email = '';
    this.location = '';
    this.meetPlace = '';
  }
}
