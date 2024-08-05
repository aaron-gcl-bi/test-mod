import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost/submit_form.php'

  constructor(private http:HttpClient) { }

  submitContactForm(name: string, number: string, address: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('name', name);
    body.set('number', number);
    body.set('address', address);

    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    return this.http.post<any>(this.apiUrl, body.toString(), { headers });
  }
}
