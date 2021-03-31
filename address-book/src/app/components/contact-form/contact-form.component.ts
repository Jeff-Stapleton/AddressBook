import { Component, OnInit, Inject } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  name = new FormControl('', Validators.required);
  phone = new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]);
  email = new FormControl('', [Validators.required, Validators.email]);
  address = new FormControl('');

  title : string = "";
  contact : Contact = {id: "", name: "", address: "", email: "", phone: "", pendingDelete: false};

  constructor(
    public dialogRef: MatDialogRef<ContactFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}


  ngOnInit(): void {
    this.title = this.data.title;
    this.contact = Object.assign({}, this.data.contact);
    if (!this.data.contact.id) {
      this.contact.id = UUID.UUID();
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  commit(): void {
    this.data.contact = Object.assign({}, this.contact);;
  
    this.dialogRef.close(this.data);
  }
}
