import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiURL = 'http://127.0.0.1:5000/contacts';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiURL);
  }
}
