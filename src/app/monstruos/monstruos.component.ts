import { Component, OnInit } from '@angular/core';
import { MonstruosService } from '../services/monstruos.service';

@Component({
  selector: 'app-monstruos',
  templateUrl: './monstruos.component.html',
  styleUrls: ['./monstruos.component.css']
})
export class MonstruosComponent implements OnInit {

  monstruos:any = [];
  constructor(private monstruoService: MonstruosService) { }

  loadMonstruos(){
    this.monstruoService.getMonstruos().subscribe(response => this.monstruos = response);
  }
  ngOnInit(): void {
    this.loadMonstruos();
  }

}
