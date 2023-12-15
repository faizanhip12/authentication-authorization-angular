import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl ="http://localhost:3000/api/v1/"
  private isAuthenticated = false;
  private authSecretKey = 'Bearer Token';

  constructor(private http:HttpClient) { 
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }
  
  login(username: string, password: string): Observable<any>{

      const user ={username,password}
      return this.http.post<any>(`${this.baseUrl}/endpoint`, user );
   
    // if (username === 'Jaydeep Patil' && password === 'Pass@123') {
    //   const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA'; // Generate or receive the token from your server
    //   localStorage.setItem(this.authSecretKey, authToken);
    //   this.isAuthenticated = true;
    //   return true;
    // } else {
    //   return false;
    // }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.authSecretKey);
    this.isAuthenticated = false;
  }
}
