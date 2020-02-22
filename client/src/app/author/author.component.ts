import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor() {
    this.aboutMe();
  }

  ngOnInit() {
  }

  aboutMe() {
    console.log('Autor: Ernest Bieś, PWSZ Tarnów 2020')
  }

}
