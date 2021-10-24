import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup
   userNameControl: FormControl;
   passwordControl: FormControl;
   error :boolean;

  constructor(private loginService : AuthService, private fb: FormBuilder, private router: Router)
  {
    this.loginForm = new FormGroup({});
    this.userNameControl = new FormControl();
    this.passwordControl = new FormControl();
    this.error = false;

    this.createLoginForm();
  }

  ngOnInit(): void {
  }

  createLoginForm()
  {
    this.loginForm.addControl('userName', this.userNameControl);
    this.loginForm.addControl('password', this.passwordControl);
  }

  login()
  {
    const login = this.loginForm.value;
    if(this.loginService.login(login.userName, login.password))
    {
      this.router.navigate(['./dashboard']).then(() => {
        window.location.reload();
      });
    }

    this.error=true;
  }

}
