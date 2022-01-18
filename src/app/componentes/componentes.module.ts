import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloComponent } from './articulo/articulo.component';



@NgModule({
  declarations: [
    ArticuloComponent,
    ArticulosComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],

  exports: [
    ArticulosComponent
  ]

})
export class ComponentesModule { }
