import { Component, OnInit } from '@angular/core';
import { MonstruosService } from '../services/monstruos.service';

@Component({
  selector: 'app-monstruos',
  templateUrl: './monstruos.component.html',
  styleUrls: ['./monstruos.component.css']
})
export class MonstruosComponent implements OnInit {

  monstruos:any = [];
  options = ['primigenios', 'dioses antiguos', 'dioses arquetipicos'];
  selectedOption: string;
  
  constructor(private monstruoService: MonstruosService) { }

  loadMonstruos(){
    return this.monstruoService.getMonstruos().subscribe(response => this.monstruos = response);
  }
  ngOnInit(): void{
    this.loadMonstruos();
  }
  onSubmit() {
    console.log(this.selectedOption);
  }

}
