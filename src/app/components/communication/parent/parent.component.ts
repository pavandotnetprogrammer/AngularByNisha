import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  username:string="Pavan kumar Attuluri";
  dataFromChild:string='';
  constructor(){}
  parentMethod(data:string){
    debugger;
    this.dataFromChild=data;

  }

}
