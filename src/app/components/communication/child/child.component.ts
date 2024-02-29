import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input() message:string='';
  @Output() notify:EventEmitter<string> =new EventEmitter<string>();

  constructor(){}  

  sendData(){
    debugger;
    console.log("button clicked");

    this.notify.emit("Data from child Component");
  }
  
  

}
