import { Component } from '@angular/core';
import { StorageService } from '../../servicios/storage.service';
import { DataRespuesta } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  get articulos(): DataRespuesta[] {
    return this.storageService.getALocalrticulos;
  }

  constructor( private storageService: StorageService ) {}
}
