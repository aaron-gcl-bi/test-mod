import { Component } from '@angular/core';
import { AuthenticationService } from '../../../../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  welcomeMessage :string = 'Welcome to ShoeStore !!';

  constructor(private authenticationService: AuthenticationService){}

  ngOnInit():void{
    this.authenticationService.isLoggedIn().subscribe(isLoggedIn=>{
      if (isLoggedIn){
        this.authenticationService.getUsername().subscribe(username=>{
          if (username){
            this.welcomeMessage = `Welcome to ShoeStore, ${username} !!`;
          }
        })
      }
    })
  }

}
