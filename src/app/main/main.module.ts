import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from '../login/login.module';
import { HomeComponent } from './home/home.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ContactService } from '../services/contact.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    ShoesComponent,
    AddComponent,
    DetailsComponent,
    AboutComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    LoginModule,
  ],
  exports:[
    HeaderComponent,
    HomeComponent,
    ShoesComponent
  ],
  providers:[ContactService]
})
export class MainModule { }
