import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private previousUrl: string = '/';
  private scrollPosition: number = 0;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('NavigationEnd event:', event);
      this.previousUrl = event.urlAfterRedirects;
      this.scrollPosition = window.scrollY;
    });
  }

  getPreviousUrl(): string {
    return this.previousUrl;
  }

  getScrollPosition(): number{
    return this.scrollPosition;
  }
}
