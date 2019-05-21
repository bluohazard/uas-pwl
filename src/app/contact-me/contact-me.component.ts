import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  contacts = [
  ];

  nama: string;
  email: string;
  pesan: string;
  private isVisible = false;

  addContact() {
    this.contacts.push({ name: this.nama, email: this.email, pesan: this.pesan });
  }

  constructor() { }

  ngOnInit() {
  }

  showHide() {
    this.isVisible = true;
  }

}
