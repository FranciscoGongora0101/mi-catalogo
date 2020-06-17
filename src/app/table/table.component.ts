import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/assets/models';
import { AutosServiceService } from '../services/autos-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autoSeleccionado: Automovil;
  autos: Automovil[];

  constructor(private autoService: AutosServiceService) { }

  ngOnInit() {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }


}
