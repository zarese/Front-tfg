import { Component, OnInit } from '@angular/core';
import { trabajador } from 'src/app/Models/trabajador.interface';
import { TrabajadoresService } from 'src/app/Service/trabajadores.service';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {
  trabajadores!:trabajador[];
  constructor(private trabajadoresSrv: TrabajadoresService) { }

  ngOnInit(): void {
    this.listaModelos();
  }
  listaModelos() {
    this.trabajadoresSrv.selectTrabajadores()
    .subscribe(res => {
      console.log(res);
      this.trabajadores = Object.values(res)})

}
}
