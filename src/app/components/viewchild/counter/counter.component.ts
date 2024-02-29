import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit {
  public counter:number=0;

  constructor(){}
  ngOnInit(): void {
    
  }
  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

}
