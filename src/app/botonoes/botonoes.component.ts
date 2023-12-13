import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botonoes',
  templateUrl: './botonoes.component.html',
  styleUrl: './botonoes.component.css'
})
export class BotonoesComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
    }

    text_color:string = '';

    button_disabled:boolean = false;

}
