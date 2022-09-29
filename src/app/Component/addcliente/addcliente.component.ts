import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/Cliente.interface';
import { ClienteService } from 'src/app/Service/cliente.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addcliente',
  templateUrl: './addcliente.component.html',
  styleUrls: ['./addcliente.component.css']
})
export class AddclienteComponent implements OnInit {
  cliente:Cliente={
    id: 0,
    dni_cif: '',
    nombre: '',
    apellidos: '',
    email: '',
    direccion: '',
    segundireccion: '',
    telefono: 0
  }
  
  constructor(
    private clienteSrv: ClienteService,
    private location: Location

  ) { }

  ngOnInit(): void {
  }
  addCliente() {
    console.log(this.cliente.nombre);
    console.log(this.cliente.segundireccion);
    this.clienteSrv.addCliente(this.cliente)
      .subscribe((addcliente) => {
        console.log(addcliente);
      });
  }

}
