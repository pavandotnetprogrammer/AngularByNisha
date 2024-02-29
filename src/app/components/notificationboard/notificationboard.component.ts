import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notificationboard',
  templateUrl: './notificationboard.component.html',
  styleUrl: './notificationboard.component.scss'
})
export class NotificationboardComponent implements OnInit {

  notificationMessage!:string;

  constructor(private notificationService:NotificationService){}

  ngOnInit(): void {

    this.notificationService.notificationSubject.subscribe(res=>{
      this.notificationMessage=res;

    })
    
  }

}
