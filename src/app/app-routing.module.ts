import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { ShoesComponent } from './main/shoes/shoes.component';
import { HomeComponent } from './main/home/home.component';
import { DetailsComponent } from './main/details/details.component';
import { AddComponent } from './main/add/add.component';
import { AuthenticationGuardService } from './services/authentication.guard.service';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './main/wishlist/wishlist.component';

const routes: Routes = [
  { path: '',redirectTo: 'home',pathMatch:'full'},
  { path:'about', component: AboutComponent },
  { path:'shoes', component:ShoesComponent},
  { path: 'home', component:HomeComponent},
  { path: 'details/:id', component:DetailsComponent},
  { path: 'add', component:AddComponent, canActivate:[AuthenticationGuardService]},
  { path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: 'wishlist', component:WishlistComponent, canActivate:[AuthenticationGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
