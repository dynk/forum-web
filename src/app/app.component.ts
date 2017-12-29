import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string;
  password: string;
  url = 'http://localhost:3000/users/login';

  myControl: FormControl = new FormControl();
  constructor(private http: Http) {

  }
  private login() {
    this.http.post(this.url, {email: this.email, password: this.password})
    .subscribe(
      res => {
        console.log(res.json());
      },
      err => {
        console.log(err);
      }
    );
  }
}
