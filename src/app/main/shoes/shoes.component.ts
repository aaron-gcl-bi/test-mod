import { Component, inject } from '@angular/core';
import { ShoeListings } from '../../services/shoe-listings';
import { ShoesService } from '../../services/shoes.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.css'
})
export class ShoesComponent {
  shoes: ShoeListings[] = [];

  shoesService: ShoesService = inject(ShoesService);
  constructor(){
    this.shoes = this.shoesService.getAllShoeListings();
  }
  

}
