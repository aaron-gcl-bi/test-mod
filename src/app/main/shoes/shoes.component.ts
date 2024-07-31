import { Component, inject } from '@angular/core';
import { ShoeListings } from '../../../../shoe-listings';
import { ShoesService } from '../../../../shoes.service';

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
