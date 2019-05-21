import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends = [
    { name: 'Greggy Gianini Firmansyah', email: 'greggygf@gmail.com', contact: '@GreggyGF' },
  ];

  nama: string;
  email: string;
  contact: string;

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
    contact: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ])
  });

  get name() {
    return this.form.get('name');
  }

  get emaill() {
    return this.form.get('email');
  }

  get contacts() {
    return this.form.get('contact');
  }

  addFriend() {
    this.friends.push({ name: this.nama.toUpperCase(), email: this.email, contact: this.contact });
  }

  constructor() { }

  ngOnInit() {
  }

}
