import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { Product } from './../model/product';
import { Observable, EMPTY } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL = "http://localhost:3000/produto"

  constructor(private http: HttpClient) { }

  read(): Observable<Product[]>  {
    return this.http.get<Product[]>(this.URL)
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

  updProduct(product: Product): Observable<Product> {
    const url = `${this.URL}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

}
