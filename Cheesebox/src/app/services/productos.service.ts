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
  create(pProducto: Producto) {
    return this.httpClient.post(this.baseUrl, pProducto).toPromise();
  }

}
