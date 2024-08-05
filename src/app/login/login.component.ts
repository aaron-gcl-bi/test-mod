import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  errorMessage: string | null=null;
  // previousUrl: string ='/';

  constructor(private fb: FormBuilder,
    private authenticationService: AuthenticationService, 
    private router:Router, 
    private navigationService: NavigationService,
    private location : Location){
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  onSubmit():void{
    if(this.loginForm.valid){
      const {username, password} = this.loginForm.value;
      this.authenticationService.login(username,password).subscribe((isLoggedIn)=>{
        if(isLoggedIn){
          const previousUrl = this.navigationService.getPreviousUrl();
          this.router.navigateByUrl(previousUrl).then(()=>{
            window.scrollTo(0, this.navigationService.getScrollPosition());
          });
        }
        else{
          this.errorMessage = 'Invalid Username or Password';
        }
      });
    }
  }
  ngOnInit(): void {
    // this.previousUrl = this.navigationService.getPreviousUrl();
  }

  // closeForm(): void {
  //   console.log("Close button clicked!")
  //   const previousUrl = this.navigationService.getPreviousUrl();
  //   const scrollPosition = this.navigationService.getScrollPosition();

  //   console.log('Previous URL:', previousUrl);
  //   console.log('Scroll Position:', scrollPosition);

  //   // this.router.navigateByUrl(previousUrl).then(()=>{
  //   //   console.log(`Navigated to ${previousUrl}`)
  //   //   window.scrollTo(0, scrollPosition);
  //   // }).catch(error=>{
  //   //   console.log('Navigation Error: ', error);
  //   // })
  //   if (previousUrl && previousUrl !== '/login') {
  //     this.router.navigateByUrl(previousUrl).then(() => {
  //       console.log(`Navigated to: ${previousUrl}`);
  //       window.scrollTo(0, scrollPosition);
  //     }).catch(error => {
  //       console.error('Navigation error:', error);
  //     });
  //   } else {
  //     // Fallback if previous URL is not valid
  //     this.router.navigateByUrl('/').then(() => {
  //       window.scrollTo(0, 0);
  //     });
  //   }
  // }

  closeForm():void{
    console.log('Close button clicked !');
    this.location.back();
  }
}