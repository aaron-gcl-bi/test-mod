import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost/login_form.php'; // Your PHP script URL
  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) { 
    this.loggedIn.next(!!localStorage.getItem('token'));
    this.username.next(localStorage.getItem('username'));
  }

  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      // Check against default credentials
      if ((username === 'user' && password === 'pass') || (username === 'test' && password === 'root')) {
        localStorage.setItem('token', 'your-shoe-token-here');
        localStorage.setItem('username', username);
        this.loggedIn.next(true);
        this.username.next(username);
        observer.next(true);
        observer.complete();
        return;
      }

      // Check against backend credentials
      this.http.post(this.apiUrl, { username, password }, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).subscribe({
        next: (response: any) => {
          if (response.status === 'success') {
            localStorage.setItem('token', 'your-shoe-token-here');
            localStorage.setItem('username', username);
            this.loggedIn.next(true);
            this.username.next(username);
            observer.next(true);
          } else {
            this.loggedIn.next(false);
            this.username.next(null);
            observer.next(false);
          }
          observer.complete();
        },
        error: err => {
          this.loggedIn.next(false);
          this.username.next(null);
          observer.next(false);
          console.error('Login Error:', err);
          observer.complete();
        }
      });
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.loggedIn.next(false);
    this.username.next(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getUsername(): Observable<string | null> {
    return this.username.asObservable();
  }
}
