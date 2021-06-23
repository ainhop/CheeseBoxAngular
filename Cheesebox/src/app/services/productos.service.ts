import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/';
  }

  getAll(pPag: any): Promise<Producto[]> {
    return this.httpClient
      .get<Producto[]>(`${this.baseUrl}productos?page=${pPag}`)
      .toPromise();
  }

  getById(pId): Promise<Producto> {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .get<Producto>(`${this.baseUrl}productos/${pId}`, httpOpciones)
      .toPromise();
  }

  create(fd: FormData) {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };

    return this.httpClient
      .post(`${this.baseUrl}productos/create`, fd, httpOpciones)
      .toPromise();
  }

  getByItem(pValor): Promise<Producto[]> {
    return this.httpClient
      .get<Producto[]>(`${this.baseUrl}productos/search/${pValor}`)
      .toPromise();
  }

  deleteById(pId): Promise<Producto[]> {
    return this.httpClient
      .delete<Producto[]>(`${this.baseUrl}productos/delete/${pId}`)
      .toPromise();
  }
  update(pId, fd: FormData) {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .put(`${this.baseUrl}productos/update/${pId}`, fd, httpOpciones)
      .toPromise();
  }
}
