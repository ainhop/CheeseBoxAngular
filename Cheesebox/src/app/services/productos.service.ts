import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/';
  }

  getAll(): Promise<Producto[]> {
   
    return this.httpClient.get<Producto[]>(`${this.baseUrl}productos`).toPromise();
  }

  getById(): Promise<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}productos`).toPromise();
  }

  create(pProducto: Producto) {
    return this.httpClient.post(`${this.baseUrl}productos/create`, pProducto).toPromise();
  }
}
