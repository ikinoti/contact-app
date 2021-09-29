import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../Contact';
import { CONTACTS } from '../mock-contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  getContacts(): Observable<Contact[]> {
    const contacts = of(CONTACTS);
    return contacts;
  }
}
