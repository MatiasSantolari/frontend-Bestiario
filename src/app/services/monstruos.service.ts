import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonstruosService {

  constructor(private httpClientService: HttpClient) { }

  baseUrl = "http://localhost:3000/api/";

  getMonstruos() {
    const url = this.baseUrl+"monstruos";
    return this.httpClientService.get<any>(url);
  }
}
