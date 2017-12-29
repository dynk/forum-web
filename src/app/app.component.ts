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
    // TODO
    this.isLogged = true;
  }
  private login() {
    this.http.post(this.url, {email: this.email, password: this.password})
    .subscribe(
      res => {
        const response = res.json();
        console.log(response);
        this.isLogged = true;
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
