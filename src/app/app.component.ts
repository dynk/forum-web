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

  constructor(private router: Router) {
  }
  goHome() {
    this.router.navigate(['login']);
  }

}
