import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  topic: any;
  user: any;
  messages: any;
  description: string;
  baseUrl = 'http://localhost:3000';
  constructor(
    private http: Http,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.topic = JSON.parse(window.localStorage.getItem('topic'));
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.http.get(`${this.baseUrl}/topics/${this.topic._id}/messages`)
    .subscribe(
      res => {
        this.messages = res.json();
        console.log(this.messages);
      },
      err => {
        console.log(err);
      }
    );
  }
  goToTopics() {
    this.router.navigate([`topics`]);
  }
  createMessage() {
    this.http.post(
      `${this.baseUrl}/users/${this.user._id}/topics/${this.topic._id}/messages`,
      { description: this.description})
    .subscribe(
    res => {
      this.openSnackBar('Message created!', 'Success!');
      delete this.description;
      // this.router.navigate([`topics`]);
    },
    err => {
      this.openSnackBar(err.json(), 'Error');
      console.log(err.json());
    }
    );
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
