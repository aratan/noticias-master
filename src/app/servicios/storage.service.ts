/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DataRespuesta } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
//storage
private _storage: Storage | null = null;
private _localArticulos: any[] = [];

constructor(private storage: Storage) {
  this.init();
}

get getALocalrticulos(){
  return [...this._localArticulos];
}

async init() {
  const storage = await this.storage.create();
  this._storage = storage;
  this.cargaFavoritos();
  }


  async guardaArticulo( articulo: DataRespuesta){
    const existe = this._localArticulos.find(localArticulo => localArticulo.nombre === articulo.nombre);
    if (existe){
      //this._localArticulos = this._localArticulos.filter(localArticulo => localArticulo.nombre) !== this.articulo.nombre;
    }
    //añdir datos a fav
    this._localArticulos = [ articulo , ...this._localArticulos];
    this._storage.set('articulos', this._localArticulos );
  }

  async borrarArticulo(articulo: DataRespuesta){
      //let existe = this._localArticulos.find(localArticulo => localArticulo.nombre === articulo.nombre);
      //this._localArticulos = [articulo];
      this._localArticulos = [articulo];
      this._storage.set('articulos',[]);
      //this._storage.set('articulos',[]);
      this.cargaFavoritos();
  }


  //
  async cargaFavoritos(){
    try {
    const articulos = await this._storage.get('articulos');
      this._localArticulos = articulos || [];  
    } catch (error) {
  this._localArticulos = [];
    }
  }

}
