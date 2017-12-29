import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  baseUrl = 'http://localhost:3000';
  user: any;
  allTopics: any;
  myTopics: any;
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    console.log(this.user);
    this.http.get(`${this.baseUrl}/topics`)
    .subscribe(
      res => {
        // this.allTopics = res.json();
        console.log(this.allTopics);
      },
      err => {
        console.log(err);
      }
    );
    this.http.get(`${this.baseUrl}/users/${this.user._id}/topics`)
    .subscribe(
      res => {
        this.myTopics = res.json();
        console.log(this.myTopics);
      },
      err => {
        console.log(err);
      }
    );
  }
  goToMessages(topic) {
    window.localStorage.setItem('topic', JSON.stringify(topic));
    this.router.navigate([`messages`]);
  }

}
