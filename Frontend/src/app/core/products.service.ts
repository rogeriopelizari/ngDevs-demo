import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL = "http://localhost:3000/produto"

  constructor(private http: HttpClient) { }

  read(): Observable<Product[]>  {
    return this.http.get<Product[]>(this.URL);
  }

  criar(product: Product): Observable<Product> {
    return this.http.post<Product>(this.URL,product)
  }

  getById(id: any): Observable<Product> {
    return this.http.get<Product>(`${this.URL}/${id}`)
  }

  deleteProduct(id: number): Observable<Product>  {
    return this.http.delete<Product>(`${this.URL}/${id}`)
  }

  /*deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.URL}/${id}`)
  }*/
}
