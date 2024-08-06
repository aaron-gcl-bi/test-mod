import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost/signup_form.php'

  constructor(private http: HttpClient) { }

  submitSignupForm(data: { username: string, password: string }): Observable<any> {
    // Convert data to JSON string
    const body = JSON.stringify(data);

    return this.http.post(this.apiUrl, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'json' // Ensure the response is treated as JSON
    });
  }
  
}
