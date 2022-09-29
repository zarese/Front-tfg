import { Component, OnInit } from '@angular/core';
import { Suelo } from 'src/app/Models/Suelo.interface';
import { SueloService } from 'src/app/Service/suelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipossuelos',
  templateUrl: './tipossuelos.component.html',
  styleUrls: ['./tipossuelos.component.css']
})
export class TipossuelosComponent implements OnInit {
  suelos!: Suelo[];
  constructor(private sueloSrv: SueloService) { }

  ngOnInit(): void {
    this.listaSuelos();
  }

  listaSuelos() {
    this.sueloSrv.selectSuelos()
    .subscribe(res => {
      console.log(res);
      this.suelos = Object.values(res)})

}





  delete(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "No se podrá reverir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Borrado',
          'Este suelo ha sido borrado',
          'success'
          
        )
        location.href="/logueado/Suelos";
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'No se ha borrado este suelo',
          'error'
        )
      }
    })
  }
}


