import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private myLogin = '';
  private myPassword = '';
  constructor() {}


  ngOnInit() {
  }

  onClick() {
    console.log('Login: ' + this.myLogin);
    console.log('Password: ' + this.myPassword);
  }

}
