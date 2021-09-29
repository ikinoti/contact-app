import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/Contact';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent implements OnInit {
  @Input() contact: any;
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
