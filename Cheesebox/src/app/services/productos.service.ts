import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/';
  }

  getAll(limit: number = 6, page: number = 1): Promise<Producto[]> {
    return this.httpClient
      .get<Producto[]>(`${this.baseUrl}productos?limit=${limit}&page=${page}`)
      .toPromise();
  }

  getById(pId): Promise<Producto> {
    return this.httpClient
      .get<Producto>(`${this.baseUrl}productos/${pId}`)
      .toPromise();
  }

  create(fd: FormData) {
    console.log(fd);
    return this.httpClient
      .post(`${this.baseUrl}productos/create`, fd)
      .toPromise();
  }

  getByItem(pValor): Promise<Producto[]> {
    return this.httpClient
      .get<Producto[]>(`${this.baseUrl}productos/${pValor}`)
      .toPromise();
  }
}
