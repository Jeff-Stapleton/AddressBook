import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() contact: Contact = {name: "", address: "", email: "", phone: ""};

  constructor() { }

  ngOnInit(): void {
  }
}
