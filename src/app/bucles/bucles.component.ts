import { persona } from './../persona';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {

  personas: persona[] = [
    {nombre: 'Juan', edad: 20},
    {nombre: 'Ana', edad: 25},
    {nombre: 'Luis', edad: 30},
    {nombre: 'Maria', edad: 35},
  ]

}
