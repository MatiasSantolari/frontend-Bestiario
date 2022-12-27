import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonstruosService {

  constructor(private httpClientService: HttpClient) { }

  private _refresh$ = new Subject<void>();
  get refresh$(){
    return this._refresh$;
  }
  baseUrl = "http://localhost:3000/api/";

  getMonstruos() {
    const url = this.baseUrl+"monstruos";
    return this.httpClientService.get<any>(url);
  }

  getMonstruosByEspecie(id_especie:String){
    const url = this.baseUrl + `especies/${id_especie}`;
    return this.httpClientService.get<any>(url);
  }
}
