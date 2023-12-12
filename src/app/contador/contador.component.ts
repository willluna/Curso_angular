import { Component, OnInit } from '@angular/core';
import { persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'] // La propiedad es 'styleUrls' y debe ser un array
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  numero: number = 1;

  decrementar() {
    this.numero--;
  }

  incrementar() {
    this.numero += 1;
  }
}
