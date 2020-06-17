import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/assets/models';
import { AUTOMOVILES } from 'src/assets/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autoSeleccionado: Automovil;
  autos: Automovil[];

  constructor() { }

  ngOnInit() {
    this.autos = AUTOMOVILES;
  }


}
