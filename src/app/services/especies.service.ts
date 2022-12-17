import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  constructor(private httpClientService: HttpClient) { }

  baseUrl = "http://localhost:3000/api/";

  getEspecies(){
    const url = this.baseUrl + "especies";
    return this.httpClientService.get<any>(url);
  }
}
