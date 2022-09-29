import { Component, OnInit } from '@angular/core';
import { trabajador } from 'src/app/Models/trabajador.interface';
import { TrabajadoresService } from 'src/app/Service/trabajadores.service';

@Component({
  selector: 'app-add-trabajadores',
  templateUrl: './add-trabajadores.component.html',
  styleUrls: ['./add-trabajadores.component.css']
})
export class AddTrabajadoresComponent implements OnInit {


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
  constructor(private trabajadorSrv: TrabajadoresService) { }

  ngOnInit(): void {
  }
  addCliente() {
    console.log(this.trabajador.nombre);

    this.trabajadorSrv.addTrabajador(this.trabajador)
      .subscribe((addtrabajador) => {
        console.log(addtrabajador);
      });
  }
}
