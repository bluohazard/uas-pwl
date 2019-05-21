import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    pesan: new FormControl('', [
      Validators.required
    ])
  });

  get name() {
    return this.form.get('name');
  }

  get emaill() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('pesan');
  }

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
