import { Component, ChangeDetectorRef, ViewChild, AfterViewChecked } from '@angular/core';

import { Contact } from "src/app/models/contact.model"
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.scss'],
})
export class ContactTableComponent implements AfterViewChecked{
  displayedColumns: string[] = ['name', 'phone', 'email', 'address', 'delete'];
  dataSource = new MatTableDataSource<Contact>([]);
  
  @ViewChild(MatSort)sort: MatSort = new MatSort;

  constructor(
    public dialog: MatDialog,
    public changeDetectorRef: ChangeDetectorRef
  ) { }

  ngAfterViewChecked(): void {
    this.dataSource.sort = this.sort;
  }

  addContact() : void {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '250px',
      data: {
        title: "Add Contact",
        contact: {name: "", address: "", email: "", phone: ""},
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.contact) {
        let contacts = this.dataSource.data;
        contacts.push(data.contact);

        this.refresh(contacts);
      }
    });
  }

  editContact(contact: Contact) : void {
    if (contact.pendingDelete) {
      return;
    }
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '250px',
      data: {
        title: "Edit Contact",
        contact: contact,
      }
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data.contact) {
        let contacts = this.dataSource.data;
        let contact = contacts.find(x => x.id == data.contact.id)
        if (contact)
        {
          let index = contacts.indexOf(contact);
          contacts[index] = data.contact;

          this.refresh(contacts);
        }
      }
    });
  }

  deleteContact(contact: Contact) : void {
    contact.pendingDelete = true;
    let contacts = this.dataSource.data;
    let index = contacts.indexOf(contact);
    contacts.splice(index, 1);

    this.refresh(contacts);
  }

  refresh(data : Array<Contact>) : void {
    this.dataSource = new MatTableDataSource(data);
    this.changeDetectorRef.detectChanges();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
