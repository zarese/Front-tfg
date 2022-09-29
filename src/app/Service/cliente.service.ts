import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Cliente } from '../Models/Cliente.interface';
import { Observable } from 'rxjs';

@Injectable({  providedIn: 'root'})
export class ClienteService {

  constructor(private http: HttpClient) { }


  selectClientes() {
    return this.http.get('http://localhost:8080/api/clientes');
   }





  addCliente(cliente: Cliente){
    return this.http.post('http://localhost:8080/api/create/clientes', cliente);
  }

  modClientes(cliente: Cliente){
    return this.http.put('http://localhost:8080/api/update/clientes', cliente);
   
  }
  selectClientesId(id: any) {
    return this.http.get(`http://localhost:8080/api/clientes/${id}`);

  }
/*
  deleteModelos(id) {
    return this.http.delete(`${environment.API_URL_SPRING}/modelos/${id}`);
  }*/
}
