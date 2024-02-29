import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from '../../guards/unsavedchanges.guard';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.scss'
})
export class AdduserComponent implements CanComponentLeave {

  userName: FormControl = new FormControl();

  canLeave(): boolean {
    if (this.userName.dirty) {
      return window.confirm("You have some unsaved changes in the page. Are you sure you want to navigate???");
    }
    return true;
  }



}
