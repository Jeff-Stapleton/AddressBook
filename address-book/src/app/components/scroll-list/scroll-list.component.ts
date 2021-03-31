import { Component, OnInit } from '@angular/core';

import { Contact } from "src/app/models/contact.model"
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-scroll-list',
  templateUrl: './scroll-list.component.html',
  styleUrls: ['./scroll-list.component.scss']
})
export class ScrollListComponent implements OnInit {

  contacts = Array<Contact>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contacts = []
  }

  editContact(contact: Contact) : void {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '250px',
      data: contact
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.contacts = [...this.contacts, result];
    });
  }

  addContact() : void {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '250px',
      data: {firstName: "", lastName: "", address: "", email: "", phone: ""}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.contacts = [...this.contacts, result];
    });

  //   this.contacts.sort(function(a, b) {
  //     var textA = a.firstName.toUpperCase();
  //     var textB = b.firstName.toUpperCase();
  //     return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  // });
  //   this.contacts = [...this.contacts, {firstName: "Jeff", lastName: "Stapleton", address: "10652 S Wild Rice Dr.", email: "jeff.d.stapleton@gmail.com", phone: "(949) 632-0102"}];
  }
}
