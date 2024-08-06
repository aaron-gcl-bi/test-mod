import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from '../services/signup.service';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[
    LoginComponent,
    SignupComponent
  ],
  providers:[
    SignupService
  ]
})
export class LoginModule { }
