import { Injectable } from '@angular/core';
import { CITAS } from '../Component/citas/citas.json';
import { Cita } from '../Models/Citas.interface';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  
  constructor() { }

  getCitas(): Cita[]{
    return CITAS;
  }
}
