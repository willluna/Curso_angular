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


    src:string = "https://images.pexels.com/photos/19165526/pexels-photo-19165526/free-photo-of-cafeina-cafe-taza-capuchino.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load";

}
