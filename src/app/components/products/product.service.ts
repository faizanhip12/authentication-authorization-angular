
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService  { 
private baseUrl = 'http://localhost:3000/api/v1';
private authSecretKey = 'Bearer Token';

constructor(private http: HttpClient) {}

private getHeaders(): HttpHeaders {
  const authToken = localStorage.getItem(this.authSecretKey);
  return new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`
  });
}

getProducts() : Observable<any[]>{
  // const headers = this.getHeaders();
  console.log("getProducts()getProducts()getProducts()getProducts()getProducts()getProducts()getProducts()getProducts()")
  return this.http.get<any[]>(`${this.baseUrl}/products`);
}

getProductDetailById(id : number){
  const headers = this.getHeaders();
  return this.http.get(`${this.baseUrl}/products/` + id, { headers })
}
}
