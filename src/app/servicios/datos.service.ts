import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { DataRespuesta, ArticulosByCategoriaAndPage } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



const apikey = environment.apikey;

@Injectable({
  providedIn: 'root'
})

export class DatosService {

  private articulosByCategoria: ArticulosByCategoriaAndPage = {};
  private memo: any;

  constructor( private http: HttpClient ) { }
  //DataRespuesta interface y observable como filtro

    getTopHeadLines(): Observable<DataRespuesta> {
      console.log(this.memo);
      if (this.memo === undefined){
        this.memo = this.http.get<DataRespuesta>(`${apikey}`);
        return this.memo;
        console.log('define la variable');
      }else{
        console.log('definida la variable');
        return this.memo;
      }
      //return this.http.get<DataRespuesta>(`${apikey}/json.php`);
    }

    getTopHeadLinesByCategoria( categoria: string, cargaMas: boolean = false ): Observable<DataRespuesta> {
      console.log(`SERVICIO: => ${apikey}${categoria}`)
      return this.http.get<DataRespuesta>(`${apikey}${categoria}`);
    }

}
