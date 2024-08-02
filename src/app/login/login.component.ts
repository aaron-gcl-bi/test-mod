import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  errorMessage: string | null=null;
  previousUrl: string ='/';

  constructor(private fb: FormBuilder,
    private authenticationService: AuthenticationService, 
    private router:Router, 
    private navigationService: NavigationService){
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
          this.router.navigate(['/shoes']);
        }
        else{
          this.errorMessage = 'Invalid Username or Password';
        }
      });
    }
  }
  ngOnInit(): void {
    this.previousUrl = this.navigationService.getPreviousUrl();
  }

  closeForm(): void {
    this.router.navigateByUrl(this.previousUrl)  // Adjust the route as needed
  }
}
