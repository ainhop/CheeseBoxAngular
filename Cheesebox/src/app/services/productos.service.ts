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

  getAll(pPag:any ): Promise<Producto[]> {
    return this.httpClient
      .get<Producto[]>(`${this.baseUrl}productos?page=${pPag}`)
      .toPromise();
  }

  getById(pId): Promise<Producto> {
    return this.httpClient
      .get<Producto>(`${this.baseUrl}productos/${pId}`)
      .toPromise();
  }

  create(fd: FormData) {
    const httpOpciones = {
      headers: new HttpHeaders ({
        authorization: localStorage.getItem('token')
      })
    }
    console.log(fd);

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
    console.log(fd);
    return this.httpClient
      .put(`${this.baseUrl}productos/update/${pId}`, fd)
      .toPromise();
  }

  paginator(): Promise<any> {
    console.log();
    return this.httpClient.get(`${this.baseUrl}productos/info/pag`).toPromise();
  }
}
