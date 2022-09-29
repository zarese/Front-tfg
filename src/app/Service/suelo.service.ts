import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Suelo } from '../Models/Suelo.interface';

@Injectable({
  providedIn: 'root'
})
export class SueloService {

  constructor(private http: HttpClient) { }



  selectSuelos() {
    return this.http.get('http://localhost:8080/api/suelos');
   }
   modSuelos(suelo: Suelo){
    return this.http.put('http://localhost:8080/api/update/suelos', suelo);
   
  }
  selectSuelosId(id: any) {
    return this.http.get(`http://localhost:8080/api/suelos/${id}`);

  }
}
