import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/assets/models';
import { AUTOMOVILES } from 'src/assets/data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  autos: Automovil[];
  constructor() { }

  ngOnInit() {
    this.autos = AUTOMOVILES;
  }

}
