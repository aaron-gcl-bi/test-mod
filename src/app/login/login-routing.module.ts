import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { HomeComponent } from '../main/home/home.component';
import { ShoesComponent } from '../main/shoes/shoes.component';
import { AddComponent } from '../main/add/add.component';
import { AuthenticationGuardService } from '../../../authentication.guard.service';
import { DetailsComponent } from '../main/details/details.component';
import { AboutComponent } from '../main/about/about.component';
import { WishlistComponent } from '../main/wishlist/wishlist.component';

export const routes: Routes = [
  { path: '',redirectTo: 'home',pathMatch:'full'},
  { path:'about', component: AboutComponent },
  { path:'shoes', component:ShoesComponent},
  { path: 'home', component:HomeComponent},
  { path: 'details/:id', component:DetailsComponent},
  { path: 'add', component:AddComponent, canActivate:[AuthenticationGuardService]},
  { path: 'login', component:LoginComponent},
  { path: 'wishlist', component:WishlistComponent, canActivate:[AuthenticationGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
