import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrl: './users-data.component.scss'
})
export class UsersDataComponent implements OnInit {
  users:any;
  errorMessage:string="Loading....";

  constructor(private userService:UsersService, private route:ActivatedRoute){}

  ngOnInit(): void {

    //getting and binding service api data, in general way
    // this.userService.getAllUsersFromHttpAPI().subscribe(res=>{
    //   debugger;
    //   this.users=res;
    // },(err)=>{
    //   debugger;
    //   this.errorMessage=err;
    // })

    //getting and binding service api data using resolve guards.
    this.users=this.route.snapshot.data['data'];

    
  }

}
