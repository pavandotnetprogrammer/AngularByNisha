import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.scss'
})
export class TdfComponent implements OnInit {

  countryList=['India','UK','USA'];
  user:any;


  ngOnInit(): void {

    this.user={
      firstname:'Leela',
      lastname:'Akshaya',
      address:{
        city:'Hyderabad'
      }

    }
    
  }
  onSubmit(data:NgForm){
    console.log(data.value);
  }
  resetForm(userForm:NgForm){
    //userForm.resetForm();// this will reset complete form
    userForm.resetForm({   // this will perform complete reset and bind new values to the controls which we specified.
      firstname:'testuser',
      address:{
        city:'guntur'
      }
    });
  }

}
