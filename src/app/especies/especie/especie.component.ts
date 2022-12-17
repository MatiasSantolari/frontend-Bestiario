import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Especie } from '../../models/especie.model';

@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.css']
})
export class EspecieComponent implements OnInit {

  @Input()
  especie!: Especie;
  @Input()
  indice!: string;

  @Output() seleccionarEspecie = new EventEmitter<string>();

  especieSeleccionada:any=null;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(especie:Especie): void {
    this.especieSeleccionada = especie;
    console.log("Especie seleccionada: ",this.especieSeleccionada.nombre, this.especieSeleccionada._id)
    this.seleccionarEspecie.emit(this.especieSeleccionada)
  }



}
