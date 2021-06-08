import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/recetas.interfaces'

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/';
  }
  create(pReceta: Receta) {
    return this.httpClient.post(this.baseUrl, pReceta).toPromise();
  }

}
