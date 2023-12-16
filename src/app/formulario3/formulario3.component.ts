import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrl: './formulario3.component.css',
  providers:[FormBuilder]
})
export class Formulario3Component {


    name = new FormControl('William');
    email = new FormControl('willliam.luna@rappi.com');
}
