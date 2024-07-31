import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './main/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'test-mod';
  @ViewChild(HeaderComponent, {static:true}) child!: HeaderComponent;

  ngOnInit(): void {
    
  }
}
