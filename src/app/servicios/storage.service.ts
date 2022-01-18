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

async init() {
  const storage = await this.storage.create();
  this._storage = storage;
  }


  async guardaArticulo( articulo: DataRespuesta){
    this._localArticulos = [ articulo , ...this._localArticulos];
    this._storage.set('articulos', this._localArticulos );
  }

}
