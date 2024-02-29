import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  currentMessage!:string;

  constructor(private notificationService:NotificationService){}

  ngOnInit(): void {
    this.notificationService.notificationSubject.subscribe(res=>{
      this.currentMessage=res;
    })
  }
  
  sendMessage(message:HTMLInputElement){
    this.notificationService.sendNotification(message.value);

  }
}
