import { Component, Input, OnInit } from '@angular/core';
import { DataRespuesta } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss'],
})
export class ArticulosComponent implements OnInit {

  @Input() lectura: DataRespuesta;

  constructor() { }

  ngOnInit() {}

}
