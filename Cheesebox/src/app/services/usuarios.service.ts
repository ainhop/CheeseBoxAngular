import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/usuarios';
  }
  registro(formValues: any) {
    return this.httpClient
      .post(`${this.baseUrl}/registrar`, formValues)
      .toPromise();
  }

  login(formValues: any) {
    return this.httpClient
      .post(`${this.baseUrl}/login`, formValues)
      .toPromise();
  }

  create(fd: FormData) {
    return this.httpClient.post(`${this.baseUrl}/create`, fd).toPromise();
  }

  update(formValues: any, pId) {
    return this.httpClient
      .put(`${this.baseUrl}/update${pId}`, formValues)
      .toPromise();
  }

  getById(pId): Promise<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseUrl}/${pId}`).toPromise();
  }


 }
