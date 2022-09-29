import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Suelo } from 'src/app/Models/Suelo.interface';
import { SueloService } from 'src/app/Service/suelo.service';

@Component({
  selector: 'app-update-suelos',
  templateUrl: './update-suelos.component.html',
  styleUrls: ['./update-suelos.component.css']
})
export class UpdateSuelosComponent implements OnInit {
   suelos=[] as any;
   suelo:Suelo={
     id: 0,
     tipo: '',
     instalacion: '',
     compatibilidad_rad: '',
     color: '',
     material: '',
     acabado: '',
     precio: 0,
     img: ''
   }
   id!: Params;
  constructor(
    private sueloSrv: SueloService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
  this.listaSuelo()
  
  
  }
  modSuelos() {
    console.log(this.suelo);
    this.sueloSrv.modSuelos(this.suelo)
      .subscribe((modsuelo) => {
        console.log(modsuelo);
      });
  
  }

  listaSuelo(): void {
    console.log(this.id)
    this.id = this.activatedRoute.snapshot.params;
    const params = this.activatedRoute.snapshot.params;
    this.sueloSrv.selectSuelosId(params['id'])
      .subscribe(res => {
        this.suelos = Object.values(res);

        this.suelo.id = this.suelos[0];
        console.log(this.suelos[0])

        this.suelo.color = this.suelos[1];
        console.log(this.suelos[1])

        this.suelo.acabado = this.suelos[2];
        console.log(this.suelos[2])

        this.suelo.tipo = this.suelos[3];
        console.log(this.suelos[3])

        this.suelo.compatibilidad_rad = this.suelos[4];
        console.log(this.suelos[4])

        this.suelo.material = this.suelos[5];
        console.log(this.suelos[5])

        this.suelo.tipo = this.suelos[6];
        console.log(this.suelos[6])

        this.suelo.img = this.suelos[7];
        console.log(this.suelos[7])
      
        this.suelo.precio = this.suelos[8];
        console.log(this.suelos[8])




      })
    }
}
