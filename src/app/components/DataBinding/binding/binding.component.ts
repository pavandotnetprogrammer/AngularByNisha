import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
  pageTitle:string="Data Binding in Angular";
  imageUrl:string="assets/images/SP__4387.JPG";
  btnStatus:boolean=false;
  username: string = '';

  changeTitle(){
    this.pageTitle="Data binding using event binding";
  }



}
