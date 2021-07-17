import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuarios.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private baseUrl: string;
  token: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  registro(formValues: any) {
    return this.httpClient
      .post(`${this.baseUrl}/usuarios/registrar`, formValues)
      .toPromise();
  }

  login(formValues: any) {
    console.log(formValues);
    return this.httpClient
      .post(`${this.baseUrl}/usuarios/login`, formValues)
      .toPromise();
  }

  create(fd: FormData) {
    return this.httpClient
      .post(`${this.baseUrl}/usuarios/create`, fd)
      .toPromise();
  }

  update(formValues: any, pId) {
    return this.httpClient
      .put(`${this.baseUrl}/usuarios/update${pId}`, formValues)
      .toPromise();
  }

  getById(): Promise<Usuario> {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };

    return this.httpClient
      .get<Usuario>(`${this.baseUrl}/usuarios/perfil`, httpOpciones)
      .toPromise();
  }

  delete(pId): Promise<Usuario> {
    const httpOpciones = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token'),
      }),
    };
    return this.httpClient
      .delete<Usuario>(`${this.baseUrl}/recetas/delete/${pId}`, httpOpciones)
      .toPromise();
  }

  islogged() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
