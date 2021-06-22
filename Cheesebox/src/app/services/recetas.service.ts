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

  getAll(pPag:any): Promise<Receta[]> {
    return this.httpClient
      .get<Receta[]>(`${this.baseUrl}recetas?page=${pPag}`)
      .toPromise();
  }

  create(fd: FormData) {
    const httpOpciones = {
      headers: new HttpHeaders ({
        authorization: localStorage.getItem('token')
      })
    }

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
      const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      }),
    };
    return this.httpClient
      .get<Receta>(`${this.baseUrl}recetas/${pId}`)
      .toPromise();
  }

  update(pId, fd: FormData) {
    console.log(fd);
    return this.httpClient
      .put(`${this.baseUrl}recetas/update/${pId}`, fd)
      .toPromise();
  }
}
