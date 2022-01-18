import { Component, OnInit } from '@angular/core';
import { DataRespuesta } from 'src/app/interfaces/interfaces';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {

  public categorias: string[] = ['Pelicula','Serie', 'Documental','Magia'];
  public selectedCategory = this.categorias[1];
  public articulos: DataRespuesta;

  public lectura: DataRespuesta;

  constructor(
    private serviciosDatos: DatosService
  ) {}

  ngOnInit() {
    this.serviciosDatos.getTopHeadLinesByCategoria( this.selectedCategory)
      .subscribe(articulos => {
        console.log(articulos);
        this.articulos = articulos;
      });
  }

  segmentChanged( event: Event ) {
    //this.selectedCategory = (event as CustomEvent).detail.value;
      this.selectedCategory = (event as CustomEvent).detail.value;
      this.serviciosDatos.getTopHeadLinesByCategoria(
        this.selectedCategory)
        .subscribe(articulos => {
          console.log(articulos);
          this.articulos = articulos;
        });
        //console.log( event.detail.value );
  }
// scrool infinity
  loadData( event: any ) {
    console.log(event);
  }

}
