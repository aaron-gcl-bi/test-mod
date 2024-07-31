import { Component } from '@angular/core';
import { AuthenticationService } from '../../../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null=null;

  constructor(private fb: FormBuilder,private authenticationService: AuthenticationService, private router:Router){
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
}
