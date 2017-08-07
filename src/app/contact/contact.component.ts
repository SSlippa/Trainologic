import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {Contact} from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  collapse = false;


  constructor() { }

  ngOnInit() {
  }

  collpaseFunc(contact: Contact) {
    if (contact.type !== 'Contact') {
      this.collapse = !this.collapse;
    }
  }

}
