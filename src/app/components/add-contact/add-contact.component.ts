import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  name: any;
  contact: any;
  email: any;
  location: any;
  meetPlace: any;

  constructor() {}

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

    // todo - emit event

    this.name = '';
    this.contact = '';
    this.email = '';
    this.location = '';
    this.meetPlace = '';
  }
}
