import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/assets/models';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AutosServiceService } from '../services/autos-service.service';
import { ModalDetallesAutoComponent } from '../modal-detalles-auto/modal-detalles-auto.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  page : number;
  pageSize : number;
  autoSeleccionado: Automovil;
  autos: Automovil[];

  closeResult="";
  constructor(private modalService: NgbModal, private autoService: AutosServiceService) { }

  ngOnInit() {
    this.page=1;
    this.pageSize=10;
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }

  open(auto: Automovil) {
    const autoModal = this.modalService.open(ModalDetallesAutoComponent, { centered: true });
    autoModal.componentInstance.autoSeleccionado = auto;
  }
}