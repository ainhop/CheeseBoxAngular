import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/';
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
    return this.httpClient.post(`${this.baseUrl}usuarios/create`, fd).toPromise();
  }
}
