import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Models/Cliente.interface';

import { ClienteService } from 'src/app/Service/cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes!: Cliente[];

  constructor(private clienteService: ClienteService) { 

  }

  ngOnInit(): void {
  this.listaModelos();
  }
  listaModelos() {
    this.clienteService.selectClientes()
    .subscribe(res => {
      console.log(res);
      this.clientes = Object.values(res)})

}
}