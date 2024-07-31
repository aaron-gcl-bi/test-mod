import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShoeListings } from './shoe-listings';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistSubject = new BehaviorSubject<ShoeListings[]>([]);
  wishlist$ = this.wishlistSubject.asObservable();

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.isLoggedIn().subscribe(isLoggedIn => {
      if (isLoggedIn){
        this.wishlistSubject.next(this.loadWishlist());
      }
      else{
        this.wishlistSubject.next([]);
      }
    })
  }

  private loadWishlist(): ShoeListings[]{
    const username = localStorage.getItem('username');
    const wishlist = localStorage.getItem(`wishlist_${username}`);
    return wishlist ? JSON.parse(wishlist): [];
  }

  private saveWishlist(wishlist: ShoeListings[]): void{
    const username = localStorage.getItem('username');
    localStorage.setItem(`wishlist_${username}`, JSON.stringify(wishlist));
  }

  addToWishlist(shoe: ShoeListings){
    const currentWishlist = this.wishlistSubject.value;
    if (!currentWishlist.some(item => item.id === shoe.id)){
      const updatedWishlist = [...currentWishlist, shoe]
      this.wishlistSubject.next(updatedWishlist);
      this.saveWishlist(updatedWishlist);
    }
  }

  removeFromWishlist(shoe:ShoeListings): void{
    const currentWishlist = this.wishlistSubject.value;
    const updatedWishlist = currentWishlist.filter(item => item.id !== shoe.id);
    this.wishlistSubject.next(updatedWishlist);
    this.saveWishlist(updatedWishlist);
  }

  getWishlist(){
    return this.wishlistSubject.value;
  }
}
