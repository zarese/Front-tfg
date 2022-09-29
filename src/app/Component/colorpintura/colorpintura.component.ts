import { Component, OnInit } from '@angular/core';
import { Pintura } from 'src/app/Models/Pintura.interface';
import { PinturaService } from 'src/app/Service/pintura.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-colorpintura',
  templateUrl: './colorpintura.component.html',
  styleUrls: ['./colorpintura.component.css']
})
export class ColorpinturaComponent implements OnInit {
  pinturas!: Pintura[];
  constructor(private pinturaService: PinturaService) { }

  ngOnInit(): void {
    this.listaPinturas();
  }
  listaPinturas() {
    this.pinturaService.selectPinturas()
    .subscribe(res => {
      console.log(res);
      this.pinturas = Object.values(res)})

}



  delete(id: number){
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
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.deletePinturas(id);
        swalWithBootstrapButtons.fire(
          'Borrado',
          'Esta pintura ha sido borrada',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'No se ha borrado esta pintura',
          'error'
        )
      }
    })
  }
  deletePinturas(id: number) {
    this.pinturaService.deletePinturas(id).subscribe(
      res => {
        console.log(res);
        this.listaPinturas();
      },
      err => console.log(err)
    )
  }
}
