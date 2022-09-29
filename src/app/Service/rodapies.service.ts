import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RODAPIES } from '../Component/rodapies/rodapies.json';
import { Rodapies } from '../Models/Rodapies.interface';

@Injectable({
  providedIn: 'root'
})
export class RodapiesService {

  constructor(private http:HttpClient) { }

  getRodapies(): Rodapies[]{
    return RODAPIES;
  }
  selectRodapies() {
    return this.http.get('http://localhost:8080/api/rodapies');
   }
}
