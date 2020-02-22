import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
        'loginName': ['', Validators.compose([Validators.required, Validators.maxLength(512)])],
        'password' : ['', Validators.compose([Validators.required, Validators.maxLength(512)])],
        'password2' : ['', Validators.compose([Validators.required, Validators.maxLength(512)])],
        'name' : ['', Validators.maxLength(1024)],
        'surname' : ['', Validators.maxLength(1024)],
        'email' : ['', Validators.compose([Validators.maxLength(255),
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
        'day' : ['', Validators.compose([Validators.min(1), Validators.max(31)])],
        'month': '',
        'year' : ['', Validators.min(1900)],
        'address' : ['', Validators.maxLength(255)],
        'postcode' : ['', Validators.maxLength(255)],
        'city' : ['', Validators.maxLength(512)],
        'checkbox1': [false, Validators.requiredTrue],
        'checkbox2' : [false]
    }, {validator: checkPassword});
  }

  onSumbit() {
    console.log(this.registerForm.value);
  }

  ngOnInit() {
  }
}

function checkPassword(fg: FormGroup) {
  return (fg.controls['password'].value === fg.controls['password2'].value) ? null : {'isvalid': true};
}
