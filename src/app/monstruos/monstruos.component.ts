import { Component, OnInit } from '@angular/core';
import { MonstruosService } from '../services/monstruos.service';
import { EspecieComponent } from './especies/especie/especie.component';
import { EspeciesComponent } from './especies/especies.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monstruos',
  templateUrl: './monstruos.component.html',
  styleUrls: ['./monstruos.component.css']
})
export class MonstruosComponent implements OnInit {

  
  suscripcion:Subscription;
  monstruos:any = [];
  especieSeleccionada:any=null;
  constructor(private monstruoService: MonstruosService) { }

  loadMonstruos(){
    return this.monstruoService.getMonstruos().subscribe(response => this.monstruos = response);
  }
  loadMonstruosByEspecie(){
    return this.monstruoService.getMonstruosByEspecie(this.especieSeleccionada._id).subscribe(response => this.monstruos = response);
  }
  ngOnInit(): void{
    if (this.especieSeleccionada == null){
      this.loadMonstruos();
      this.suscripcion = this.monstruoService.refresh$.subscribe(() => {
        this.loadMonstruos();
        console.log('Monstruos: ',this.loadMonstruos());
      })
    } else{
      this.loadMonstruosByEspecie();
      console.log('Monstruos por especie: ',this.loadMonstruosByEspecie());
    }
  }

  getEspecieSeleccionada(espSeleccionada: string){
    this.especieSeleccionada = espSeleccionada
    console.log("EspecieElegida QUE YA SE ENCUENTRA EN EL COMPONENTE MONSTRUO: ",this.especieSeleccionada.nombre)
  }

}
