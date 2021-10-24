import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginEntity : Login

  constructor()
  {
    let value = localStorage.getItem("Login");

    if(value != null)
    {
      this.loginEntity = JSON.parse(value);
    }
    else
    {
      this.loginEntity = new Login();
    }
  }


  login(username: string, password: string): boolean
  {
    if(username == "master8@lemoncode.net" && password == "12345678")
    {
      this.loginEntity.IsLogged = true;
      this.loginEntity.Username = username;
      localStorage.setItem("Login",JSON.stringify(this.loginEntity));
      return true;
    }

    return false;
  }

  logout(): void
  {
    this.loginEntity = new Login();
    localStorage.removeItem("Login");
  }

  isLogged(): boolean
  {
    return this.loginEntity.IsLogged;
  }

  getUsername(): string
  {
    return this.loginEntity.Username;
  }

}
