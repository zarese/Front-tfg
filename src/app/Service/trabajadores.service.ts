import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { TRABAJADORES } from '../Component/trabajadores/trabajadores.json';
import { trabajador } from '../Models/trabajador.interface';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  constructor(private http: HttpClient) { }
  /*getTrabajadores() :trabajador[]{
    return TRABAJADORES

  }*/
  selectTrabajadores() {
    return this.http.get('http://localhost:8080/api/trabajadores');
   }

  addTrabajador(trabajador: trabajador){
    return this.http.post('http://localhost:8080/api/create/trabajadores', trabajador);
  }

  modTrabajador(trabajador: trabajador){
    return this.http.put('http://localhost:8080/api/update/trabajadores', trabajador);
}
selecttrabajadoresId(id: any) {
  return this.http.get(`http://localhost:8080/api/trabajadores/${id}`);

}
}