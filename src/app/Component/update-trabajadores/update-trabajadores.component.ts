import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { trabajador } from 'src/app/Models/trabajador.interface';
import { ClienteService } from 'src/app/Service/cliente.service';
import { TrabajadoresService } from 'src/app/Service/trabajadores.service';

@Component({
  selector: 'app-update-trabajadores',
  templateUrl: './update-trabajadores.component.html',
  styleUrls: ['./update-trabajadores.component.css']
})
export class UpdateTrabajadoresComponent implements OnInit {
  trabajadores=[ ] as any;
  trabajador: trabajador={
    id: 0,
    nombre: '',
    dni: '',
    puesto: '',
    apellidos: '',
    estado: '',
    email: '',
    telefono: 0
  }
  constructor(

    private trabajadorSrv: TrabajadoresService,

    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this. listatrabajador();
  }
  modTrabajador() {
    console.log(this.trabajador);
    this.trabajadorSrv.modTrabajador(this.trabajador)
      .subscribe((modtrabajador) => {
        console.log(modtrabajador);
      });
  
  }
  id!: Params;
  listatrabajador(): void {
    console.log(this.id)
    this.id = this.activatedRoute.snapshot.params;
    const params = this.activatedRoute.snapshot.params;
    this.trabajadorSrv.selecttrabajadoresId(params['id'])
      .subscribe(res => {
        this.trabajadores = Object.values(res);
        console.log(res);
        this.trabajador.id = this.trabajadores[0];
        this.trabajador.nombre = this.trabajadores[1];
        this.trabajador.apellidos = this.trabajadores[2];
        this.trabajador.dni = this.trabajadores[3];
        this.trabajador.email = this.trabajadores[4];
        this.trabajador.puesto = this.trabajadores[5];
        this.trabajador.estado = this.trabajadores[6];
        this.trabajador.telefono = this.trabajadores[7];


        console.log( this.trabajador.nombre)
      })
    }
}
