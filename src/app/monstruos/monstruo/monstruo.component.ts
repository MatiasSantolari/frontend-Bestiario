import { Component, Input, OnInit } from '@angular/core';
import { Monstruo } from '../../models/monstruo.model';

@Component({
  selector: 'app-monstruo',
  templateUrl: './monstruo.component.html',
  styleUrls: ['./monstruo.component.css']
})
export class MonstruoComponent implements OnInit {

  @Input()
  monstruo!: Monstruo;
  @Input()
  indice!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
