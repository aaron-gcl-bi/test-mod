import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class MainModule { }
