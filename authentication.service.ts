import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string|null>(null);

  constructor(private router:Router) { 
    this.loggedIn.next(!!localStorage.getItem('token'));
    this.username.next(localStorage.getItem('username'));
  }

  login(username:string, password:string): Observable<boolean>{
    if(username==='user' && password==='pass' || username==='test' && password==='root'){
      localStorage.setItem('token','your-shoe-token-here');
      localStorage.setItem('username',username);
      this.loggedIn.next(true);
      this.username.next(username);
      return new Observable<boolean>((observer)=>{
        observer.next(true);
        observer.complete();
      });
    }
    else{
      this.loggedIn.next(false);
      this.username.next(null);
      return new Observable<boolean>((observer)=>{
        observer.next(false);
        observer.complete();
      })
    }
  }

  logout():void{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.loggedIn.next(false);
    this.username.next(null);
    this.router.navigate(['/login'])
  }

  isLoggedIn():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  getUsername():Observable<string|null>{
    return this.username.asObservable();
  }
}
