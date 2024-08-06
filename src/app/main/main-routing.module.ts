import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home/home.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AddComponent } from './add/add.component';
import { AuthenticationGuardService } from '../services/authentication.guard.service';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SignupComponent } from '../login/signup/signup.component';

export const routes: Routes = [
  { path: '',redirectTo: 'home',pathMatch:'full'},
  { path:'about', component: AboutComponent },
  { path:'shoes', component:ShoesComponent},
  { path: 'home', component:HomeComponent},
  { path: 'details/:id', component:DetailsComponent},
  { path: 'add', component:AddComponent, canActivate:[AuthenticationGuardService]},
  { path: 'wishlist', component:WishlistComponent, canActivate:[AuthenticationGuardService]},
  { path: 'signup', component:SignupComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MainRoutingModule { }
