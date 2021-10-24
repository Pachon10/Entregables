import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-private',
  templateUrl: './menu-private.component.html',
  styleUrls: ['./menu-private.component.scss']
})
export class MenuPrivateComponent implements OnInit {
  userName: string;
  constructor(private loginService : AuthService, private router: Router)
  {
    this.userName = loginService.getUsername();
  }

  ngOnInit(): void {
  }

  logout()
  {
    this.loginService.logout();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

}
