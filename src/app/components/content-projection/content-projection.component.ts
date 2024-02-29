import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent implements OnInit {

  public salesProducts=[
    {id:1,name:'Acs',price:'100'},
    {id:2,name:'Phones',price:'2000'},
    {id:3,name:'Fashion',price:'5000'},
    {id:4,name:'Electronics',price:'3000'}
  ];

  public topProducts=[
    {id:1,name:'Phones',price:'1400'},
    {id:2,name:'Laptos',price:'22000'},
    {id:3,name:'Decor',price:'98000'},
    {id:4,name:'Electronics',price:'2345'}
  ];

  constructor(){}

  ngOnInit(): void {

    
  }

}
