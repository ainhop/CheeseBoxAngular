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
    if (localStorage.getItem('token')) {
      const httpOpciones = {
        headers: new HttpHeaders({
          authorization: localStorage.getItem('token'),
        }),
      };
      return this.httpClient
      .get<Producto[]>(`${this.baseUrl}productos?page=${pPag}`, httpOpciones)
      .toPromise(); 
    }
      else {
        return this.httpClient
          .get<Producto[]>(`${this.baseUrl}productos?page=${pPag}`)
          .toPromise();
      }
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

  delete(pId): Promise<Producto> {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .delete<Producto>(`${this.baseUrl}productos/delete/${pId}`, httpOpciones)
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

  editFav(pId): Promise<Producto> {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .get<Producto>(`${this.baseUrl}productos/fav/${pId}`, httpOpciones)
      .toPromise();
  }
  getByItem(pValor): Promise<Producto[]> {
    return this.httpClient
      .get<Producto[]>(`${this.baseUrl}productos/search/${pValor}`)
      .toPromise();
  }
  deleteFav(pId): Promise<Producto> {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .delete<Producto>(
        `${this.baseUrl}productos/fav/delete/${pId}`,
        httpOpciones
      )
      .toPromise();
  }

  getFavAll(pPag: any): Promise<Producto[]> {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .get<Producto[]>(`${this.baseUrl}productos/fav/all`)
      .toPromise();
  }

  paginator(): Promise<any> {
    console.log();
    return this.httpClient.get(`${this.baseUrl}productos/info/pag`).toPromise();
  }
}
