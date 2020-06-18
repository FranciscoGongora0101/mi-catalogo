import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/assets/models';
import { AutosServiceService } from '../services/autos-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';

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
  }




}
