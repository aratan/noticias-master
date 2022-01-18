import { Component, OnInit } from '@angular/core';
import { DataRespuesta } from 'src/app/interfaces/interfaces';
import { DatosService } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public lectura: DataRespuesta;

  constructor(
    private serviciosDatos: DatosService
  ) {}


    ngOnInit(){
      this.serviciosDatos.getTopHeadLines()
      .subscribe( datos => {
        //console.log(datos);
        this.lectura = datos;
          //console.log(resp[0].nombre);
        });
    }

    // scrool infinity
  loadData( event: any ) {
    console.log(event);
  }


}
