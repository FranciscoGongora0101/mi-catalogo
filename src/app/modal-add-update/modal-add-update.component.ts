import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/assets/models';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit{

  accion: string;

  auto: Automovil = {} as Automovil;

  desde: number;

  hasta: number;

  constructor(public activeModal: NgbActiveModal) { }
  ngOnInit(): void {
  }


  onSubmit(){
    let temp: number[] = this.generateModelos();
    this.auto.modelos = temp;
    this.activeModal.close(this.auto)
  
  }

  generateModelos(){
    let arreglo: number[];
    arreglo = [];
    for(let i = this.desde; i <= this.hasta; i++) {
      arreglo.push(i);
    }
    return arreglo;
  }

}
