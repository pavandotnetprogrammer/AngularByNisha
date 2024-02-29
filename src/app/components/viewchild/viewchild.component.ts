import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.scss'
})
export class ViewchildComponent implements OnInit, AfterViewInit {

  @ViewChild("highlight") marker!:ElementRef;
  @ViewChildren("highlights") markers!:QueryList<any>;

  @ViewChild("childView") child!:CounterComponent;
  constructor(private cdr:ChangeDetectorRef){
    console.log("accessing viewchild in constructor");
    
    console.log(this.marker); //view child objects can only have it's data after angular completes view initialization. so, if we try to access it in any other places, we will get undefined. So, we need to access it in ngaftervviewinit life cycle hook.
    
  }
  

  ngOnInit(): void {
    //this.cdr.detectChanges();
    
  }
  ngAfterViewInit(): void {
    console.log("accessing viewchild in afterviewinit");
    console.log(this.marker);
    this.marker.nativeElement.style.color="red";//when we use viewchild, it returns first matching element from the DOM template. all remaining it will ignore. if we want to apply our operations all mathing elements present in the template, then we need to use viewchildren.
    console.log(this.markers);

    this.markers.first.nativeElement.style.color="red";
    this.markers.first.nativeElement.nextSibling.style.color="blue";
    this.markers.first.nativeElement.nextSibling.nextSibling.nextSibling.style.color="orange";
    this.markers.last.nativeElement.style.color="green";
    this.cdr.detectChanges();
    


    
  }

  inc(){
    this.child.increment();
  }
  dec(){
    this.child.decrement();
  }

}
