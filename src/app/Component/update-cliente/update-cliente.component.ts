import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente.interface';
import { ClienteService } from 'src/app/Service/cliente.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {
  
 
   clientes = [] as any;
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
  id!: Params;
  constructor(
    private clienteSrv: ClienteService,

    private activatedRoute: ActivatedRoute

  ) { }
  ngOnInit(): void {
    this.listaCliente();
  }

  modClientes() {
    console.log(this.cliente);
    this.clienteSrv.modClientes(this.cliente)
      .subscribe((modecliente) => {
        console.log(modecliente);
      });
  
  }

  listaCliente(): void {
    console.log(this.id)
    console.log(this.cliente.segundireccion);
    this.id = this.activatedRoute.snapshot.params;
    const params = this.activatedRoute.snapshot.params;
    this.clienteSrv.selectClientesId(params['id'])
      .subscribe(res => {
        this.clientes = Object.values(res);
        console.log(res);
        this.cliente.id = this.clientes[0];
        this.cliente.nombre = this.clientes[1];
        this.cliente.apellidos = this.clientes[2];
        this.cliente.dni_cif = this.clientes[3];
        this.cliente.email = this.clientes[4];
        this.cliente.direccion = this.clientes[5];
        this.cliente.segundireccion = this.clientes[6];
        this.cliente.telefono = this.clientes[7];


        console.log( this.cliente.nombre)
      })
    }
}
