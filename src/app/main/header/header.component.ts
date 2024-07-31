import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoUrl: string = 'assets/logo.png';
  isAuthenticated : boolean =false;

  constructor(private authenticationService: AuthenticationService,
    public router:Router
  ) {}

  ngOnInit():void{
    this.authenticationService.isLoggedIn().subscribe(status=>{
      this.isAuthenticated = status;
    })
  }

  logout():void{
    this.authenticationService.logout();
  }
}
