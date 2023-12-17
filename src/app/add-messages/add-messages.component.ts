import { MessagesService } from './../messages.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrl: './add-messages.component.css'
})
export class AddMessagesComponent {
  constructor(public MessagesService: MessagesService){

  }

  message: string = "";

  addMessage(){
    this.MessagesService.add(this.message);
    this.message = "";
  }
}
