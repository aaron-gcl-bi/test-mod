import { Component, OnInit } from '@angular/core';
import { ShoeListings } from '../../services/shoe-listings';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit{
  wishlist: ShoeListings[]=[];

  constructor(private wishlistService: WishlistService){};

  ngOnInit(): void {
    this.wishlistService.wishlist$.subscribe(wishlist => {
      this.wishlist = wishlist;
    });
  }

  removeFromWishlist(shoe: ShoeListings): void{
    this.wishlistService.removeFromWishlist(shoe);
  }
}
