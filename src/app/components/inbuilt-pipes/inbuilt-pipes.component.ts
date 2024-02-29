import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrl: './inbuilt-pipes.component.scss'
})
export class InbuiltPipesComponent implements OnInit {
  pageTitle:string="inbuilt pipes in angular";

  constructor(private usersData:UsersService){}

  users:any[]=[];

  ngOnInit(): void {
    debugger;
    this.users=this.usersData.getAllUsers();
  }


}
