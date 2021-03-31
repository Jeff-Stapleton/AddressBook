import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(
    public dialogRef: MatDialogRef<ContactFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact,
  ) {}


  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  add(): void {
    this.dialogRef.close();
  }
}
