import { persona } from './../persona';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component {
  persona = {
    nombre:'',
    edad:''
  }

  procesar(){
    console.log(this.persona);
  }
}
