import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/Contact';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent implements OnInit {
  @Input() contact: any;
  @Output() onDeletetask: EventEmitter<Contact> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(contact: any) {
    this.onDeletetask.emit(contact);
  }
}
