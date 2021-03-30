import { Component, OnInit } from '@angular/core';

import { Contact } from "src/app/models/contact.model"

@Component({
  selector: 'app-scroll-list',
  templateUrl: './scroll-list.component.html',
  styleUrls: ['./scroll-list.component.scss']
})
export class ScrollListComponent implements OnInit {

  contacts = Array<Contact>();

  constructor() { }

  ngOnInit(): void {
    this.contacts = [
      {firstName: "Jeff", lastName: "Stapleton", address: "10652 S Wild Rice Dr.", email: "jeff.d.stapleton@gmail.com", phone: "(949) 632-0102"},
      {firstName: "Brooke", lastName: "Stapleton", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "John", lastName: "Law", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Ted", lastName: "Smith", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Betty", lastName: "White", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Tom", lastName: "Cruise", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Leia", lastName: "Skywalker", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Alexander", lastName: "Hamilton", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "John", lastName: "Adams", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Jeff", lastName: "Stapleton", address: "10652 S Wild Rice Dr.", email: "jeff.d.stapleton@gmail.com", phone: "(949) 632-0102"},
      {firstName: "Brooke", lastName: "Stapleton", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "John", lastName: "Law", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Ted", lastName: "Smith", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Betty", lastName: "White", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Tom", lastName: "Cruise", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Leia", lastName: "Skywalker", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Alexander", lastName: "Hamilton", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "John", lastName: "Adams", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Jeff", lastName: "Stapleton", address: "10652 S Wild Rice Dr.", email: "jeff.d.stapleton@gmail.com", phone: "(949) 632-0102"},
      {firstName: "Brooke", lastName: "Stapleton", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "John", lastName: "Law", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Ted", lastName: "Smith", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Betty", lastName: "White", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Tom", lastName: "Cruise", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Leia", lastName: "Skywalker", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "Alexander", lastName: "Hamilton", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
      {firstName: "John", lastName: "Adams", address: "10652 S Wild Rice Dr.", email: "brooke.b.stapleton@gmail.com", phone: "(208) 310-6460"},
    ]
  }

}
