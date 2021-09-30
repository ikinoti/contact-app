import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiURL = 'https://kinoti-contact-api.herokuapp.com/contacts';
  private delApiURL = 'https://kinoti-contact-api.herokuapp.com/contact';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiURL);
  }

  deleteContact(contact: Contact): Observable<Contact> {
    const url = `${this.delApiURL}/${contact.id}`;
    return this.http.delete<Contact>(url);
  }
}
