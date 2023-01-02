import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  url: string = 'http://localhost:3000/products';

  getProducts() {
    return this.http.get<IProducts[]>(this.url);

  };

  getProduct(id: number) {
    return this.http.get<IProducts>(`${this.url}/${id}`);
  }

}