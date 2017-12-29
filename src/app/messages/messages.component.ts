import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {

  topic: any;
  messages: any;
  baseUrl = 'http://localhost:3000';
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.topic = JSON.parse(window.localStorage.getItem('topic'));
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

}
