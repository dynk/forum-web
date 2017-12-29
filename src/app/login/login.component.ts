import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  name: string;
  newEmail: string;
  newPassword: string;
  newName: string;
  baseUrl = 'http://localhost:3000';

  myControl: FormControl = new FormControl();
  constructor(private http: Http, private router: Router) {
  }
  ngOnInit() {
  }
  private login() {
    this.http.post(`${this.baseUrl}/users/login`, {email: this.email, password: this.password})
    .subscribe(
      res => {
        const response = res.json();
        console.log(response);
        window.localStorage.setItem('token', response.token);
        window.localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate([`topics`]);
      },
      err => {
        console.log(err);
      }
    );
  }
  signin() {
    this.http.post(`${this.baseUrl}/users`, {name: this.newName, email: this.newEmail, password: this.newPassword})
    .subscribe(
      res => {
        const response = res.json();
        console.log(response);
        window.localStorage.setItem('token', response.token);
        window.localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate([`topics`]);
      },
      err => {
        console.log(err);
      }
    );
  }

}
