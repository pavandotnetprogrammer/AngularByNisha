import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  user:any;

  constructor(private route:ActivatedRoute,private userService:UsersService){}

  ngOnInit(): void {

    let userId=this.route.snapshot.params['id'];
    this.userService.getUserById(userId).subscribe(u=>{
      this.user=u;

    });
    
  }

}
