import { Component } from '@angular/core';
import { ShoeListings } from '../../services/shoe-listings';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoesService } from '../../services/shoes.service';
import { WishlistService } from '../../services/wishlist.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  shoe: ShoeListings | undefined;

  constructor(
    private route : ActivatedRoute,
    private shoeService: ShoesService,
    private wishlistService: WishlistService,
    private authenticationService : AuthenticationService,
    private router: Router
  ){}
  ngOnInit():void{
    const id =Number(this.route.snapshot.paramMap.get('id'));
    this.shoe=this.shoeService.getShoeListingsById(id);
  }

  addToWishlist():void{
    this.authenticationService.isLoggedIn().subscribe(isLoggedIn =>{
      if (isLoggedIn){
        if(this.shoe){
          this.wishlistService.addToWishlist(this.shoe);
        }
      }
      else{
        this.router.navigate(['/login']);
      }
    })
  }

}
