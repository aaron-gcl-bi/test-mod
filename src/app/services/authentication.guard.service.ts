import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(): Observable<boolean>{
    return this.authenticationService.isLoggedIn().pipe(
      take(1),
      map((isLoggedIn:boolean)=>{
        if(!isLoggedIn){
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    )
  }
}


