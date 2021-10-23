import { Component } from '@angular/core';
import { Login } from './model/login.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-proyecto';
  LoginEntity: Login;

  constructor(private loginService : AuthService)
  {
    this.LoginEntity = new Login();
    this.LoginEntity.IsLogged = loginService.isLogged();
    this.LoginEntity.Username = loginService.getUsername();
  }
}
