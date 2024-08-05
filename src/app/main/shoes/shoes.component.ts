import { Component, inject } from '@angular/core';
import { ShoeListings } from '../../services/shoe-listings';
import { ShoesService } from '../../services/shoes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.css'
})
export class ShoesComponent {
  shoes: ShoeListings[] = [];

  shoesService: ShoesService = inject(ShoesService);
  constructor(private location: Location){
    this.shoes = this.shoesService.getAllShoeListings();
  }
  
  closePage():void {
    console.log('Close page clicked !');
    this.location.back()
  }

}
