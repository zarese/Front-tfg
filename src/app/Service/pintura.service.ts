import { Injectable } from '@angular/core';
import { Pintura } from '../Models/Pintura.interface';
//import { PINTURA } from '../Component/colorpintura/color.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PinturaService {

  constructor(private http: HttpClient) { }

/*getPinturas(): Pintura[]{
  return PINTURA;
}*/
selectPinturas() {
  return this.http.get('http://localhost:8080/api/pinturas');
 }
 deletePinturas(id: any) {
  return this.http.delete(`ttp://localhost:8080/api/DELpinturas/${id}`);
}
}