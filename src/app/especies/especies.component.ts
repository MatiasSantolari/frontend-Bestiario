import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EspeciesService } from '../services/especies.service';
import { Especie } from '../models/especie.model';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {

  especies:any = [];
  especieSeleccionada:any=null;
  constructor(private especieService: EspeciesService) { }

  loadEspecies(){
    this.especieService.getEspecies().subscribe(response => this.especies = response);
  }
  ngOnInit(): void {
    this.loadEspecies();
  }

  getEspecieSeleccionada(espSeleccionada: string){
    this.especieSeleccionada = espSeleccionada
    console.log("EspecieElegida: ",this.especieSeleccionada.nombre)
  }
  

}
