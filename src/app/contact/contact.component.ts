import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {Contact} from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  collapse = true;


  constructor() { }

  ngOnInit() {
  }

  func(id) {
    this.collapse = !this.collapse;
  }

}
