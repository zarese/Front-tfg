import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/Models/Citas.interface';

import { CitaService } from 'src/app/Service/cita.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
 
    citas!:Cita[];


  constructor(private citaService: CitaService) { }

  ngOnInit(): void {
    this.citas=this.citaService.getCitas();

  }

}
