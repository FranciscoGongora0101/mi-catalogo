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
  displayProgressBar : boolean;

  closeResult="";
  constructor(private modalService: NgbModal, private autoService: AutosServiceService) { }

  ngOnInit() {
    this.displayProgressBar=true;
    this.page=1;
    this.pageSize=10;
    this.autoService.getAutos().subscribe((response)=>{
      setTimeout(()=>{      
        this.displayProgressBar=false;
        this.autos = response.data;
        }, 2000)
    })
  }

  open(auto: Automovil) {
    const autoModal = this.modalService.open(ModalDetallesAutoComponent, { centered: true });
    autoModal.componentInstance.autoSeleccionado = auto;
  }
}