import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string;
  password: string;
  isLogged: Boolean;
  url = 'http://localhost:3000/users/login';

  myControl: FormControl = new FormControl();
  constructor(private http: Http, private router: Router) {
    this.isLogged = false;
  }
  private login() {
    this.http.post(this.url, {email: this.email, password: this.password})
    .subscribe(
      res => {
        console.log(res.json());
        this.isLogged = true;
        window.localStorage.setItem('token', res.json());
        this.router.navigate([`topics`]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
