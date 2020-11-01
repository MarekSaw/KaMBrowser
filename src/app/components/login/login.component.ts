import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  public loginGroup = new FormGroup( {
    usernameControl: new FormControl('', Validators.required),
    passwordControl: new FormControl('', Validators.required)
  });


  constructor() { }



}
