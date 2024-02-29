import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-dir',
  templateUrl: './switch-dir.component.html',
  styleUrl: './switch-dir.component.scss'
})
export class SwitchDirComponent {
  selectedCountry:string='';
  countries:any[]=[
    {code:'ind', country:'India'},
    {code:'uae', country:'United Arab Emirates'},
    {code:'uk', country:'United Kingdom'},
  ]

  choice(code:any){
    this.selectedCountry=code.target.value;

  }

}
