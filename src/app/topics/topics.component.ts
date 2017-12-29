import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
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
  title: string;
  tag: string;
  description: string;
  constructor(
    private http: Http,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    console.log(this.user);
    this.http.get(`${this.baseUrl}/topics`)
    .subscribe(
      res => {
        this.allTopics = res.json();
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
  create() {
    this.http.post(
      `${this.baseUrl}/users/${this.user._id}/topics`,
      { title: this.title, tag: this.tag, description: this.description })
    .subscribe(
    res => {
      this.openSnackBar('Topic created!', 'Success!');
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
