import { HttpClient } from '@angular/common/http';
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

  getAll(): Promise<Receta[]> {
    return this.httpClient.get<Receta[]>(`${this.baseUrl}recetas`).toPromise();
  }

  create(fd: FormData) {
    console.log(fd)
    return this.httpClient
      .post(`${this.baseUrl}recetas/create`, fd)
      .toPromise();
  }

  getByItem(pValor): Promise<Receta[]> {
    return this.httpClient.get<Receta[]>(`${this.baseUrl}recetas/${pValor}`).toPromise();
  }

  getById(pId): Promise<Receta[]> {
    return this.httpClient.get<Receta[]>(`${this.baseUrl}recetas/${pId}`).toPromise();
  }
}

