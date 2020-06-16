import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/assets/models';
import { AUTOMOVILES } from 'src/assets/data';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autoSeleccionado: Automovil;
  autos: Automovil[];

  closeResult="";
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.autos = AUTOMOVILES;
  }

  onSelect(auto: Automovil){
    this.autoSeleccionado= auto;

  }
  open(content, auto: Automovil) {
    this.autoSeleccionado= auto;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}



