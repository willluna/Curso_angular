import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrl: './formulario3.component.css',
  providers:[FormBuilder]
})
export class Formulario3Component {


    name = new FormControl('', Validators.required);
    email = new FormControl('', [Validators.required, Validators.email]);
}
