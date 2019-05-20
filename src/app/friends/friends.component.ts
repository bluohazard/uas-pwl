import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends = [
    { name: 'Greggy', email: 'greggygf@gmail.com', contact: '@GreggyGF' },
    { name: 'Gianini', email: 'greggygf@gmail.com', contact: '@GreggyGF' },
    { name: 'Firmansyah', email: 'greggygf@gmail.com', contact: '@GreggyGF' },
  ];

  nama: string;
  email: string;
  contact: string;

  addFriend() {
    this.friends.push({ name: this.nama.toUpperCase(), email: this.email, contact: this.contact });
  }

  constructor() { }

  ngOnInit() {
  }

}
