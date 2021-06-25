import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/recetas.interfaces';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/';
  }

  getAll(pPag: any): Promise<Receta[]> {
    if (localStorage.getItem('token')) {
      const httpOpciones = {
        headers: new HttpHeaders({
          authorization: localStorage.getItem('token'),
        }),
      };
      return this.httpClient
      .get<Receta[]>(`${this.baseUrl}recetas?page=${pPag}`, httpOpciones)
      .toPromise(); 
    }
      else {
        return this.httpClient
          .get<Receta[]>(`${this.baseUrl}recetas?page=${pPag}`)
          .toPromise();
      }
  }
  create(fd: FormData) {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };

    return this.httpClient
      .post(`${this.baseUrl}recetas/create`, fd, httpOpciones)
      .toPromise();
  }

  getByItem(pValor): Promise<Receta[]> {
    return this.httpClient
      .get<Receta[]>(`${this.baseUrl}recetas/search/${pValor}`)
      .toPromise();
  }

  getById(pId): Promise<Receta> {
    return this.httpClient
      .get<Receta>(`${this.baseUrl}recetas/${pId}`)
      .toPromise();
  }

  update(pId, fd: FormData) {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };

    return this.httpClient
      .put(`${this.baseUrl}recetas/update/${pId}`, fd, httpOpciones)
      .toPromise();
  }

  delete(pId): Promise<Receta> {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .delete<Receta>(`${this.baseUrl}recetas/delete/${pId}`, httpOpciones)
      .toPromise();
  }

  getFav(pId) {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .get(`${this.baseUrl}recetas/fav/${pId}`, httpOpciones)
      .toPromise();
  }

  editFav(pId): Promise<Receta> {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .get<Receta>(`${this.baseUrl}recetas/fav/${pId}`, httpOpciones)
      .toPromise();
  }

  
  deleteFav(pId): Promise<Receta> {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .delete<Receta>(`${this.baseUrl}recetas/fav/delete/${pId}`, httpOpciones)
      .toPromise();
  }

  getFavAll(pPag: any): Promise<Receta[]> {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .get<Receta[]>(`${this.baseUrl}recetas/fav/all`)
      .toPromise();
  }
}
