import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/assets/models';
import { AutosServiceService } from '../services/autos-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { ModalConfirmActionComponent } from '../modal-confirm-action/modal-confirm-action.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  page : number;
  pageSize : number;
  autoSeleccionado: Automovil;
  autos: Automovil[];

  constructor(private autoService: AutosServiceService, private modalService: NgbModal) { }

  ngOnInit() {
    this.page=1;
    this.pageSize=10;
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }

  openModalEditar(auto: Automovil) {
    const autoModal = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    autoModal.componentInstance.auto = auto;
    autoModal.componentInstance.accion = 'Editar';

    autoModal.result.then(
      (auto)=>{
        this.autoService.updateAutos(auto).subscribe(response => console.log(response)
        )
      },
      (reason) => {
        console.log(reason)
      }
    )
  }

  openModalAgregar() {
    const autoModal = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    autoModal.componentInstance.accion = 'Agregar';

    autoModal.result.then(
      (auto)=>{
        this.autoService.addAutos(auto).subscribe(response => console.log(response)
        )
      },
      (reason) => {
        console.log(reason)
      }
    )
  }

  openModalConfirmarEliminar(auto: Automovil) {
    const autoModal = this.modalService.open(ModalConfirmActionComponent, { centered: true });
    autoModal.componentInstance.auto = auto;

    autoModal.result.then(
      (autoTemp)=>{
        this.autoService.deleteAutos(autoTemp).subscribe(response => {
          console.log("Respuesta cuando se termina de eliminar un auto")
          console.log(response)

        })
      },
      (reason) => {
        console.log(reason)
      }
    )
  }








}
