import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-hookchild',
  templateUrl: './hookchild.component.html',
  styleUrl: './hookchild.component.scss'
})
export class HookchildComponent implements OnChanges, OnInit, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy {

  interval:any;
  counter:number=0;
  @Input() parentData!:string;
  @Input() product!:Product;
  @ContentChild("childContent") contentChild!:ElementRef;
  @ViewChild('childhook') viewchild!:ElementRef;

  constructor(){
    console.log('child construcotr called..'); 
    this.interval= setInterval(()=>{
      this.counter+=1;
      console.log('counter value:-',this.counter);
      
    },1000);   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('child ngonchanges called....',changes);//this ngOnchanges life cycle hook will call until and unless the component have input data passed to this component. otherwise, this hook will not execute at any cost.
  } 
  ngOnInit(): void {
    console.log('child ng oninit called.....');
    
  }
  ngDoCheck(): void {
    console.log('child ngdocheck called...', this.product);
    
  }
  ngAfterContentInit(): void {
    console.log('child ngaftercontentInit called.....', this.contentChild);
    //this.contentChild.nativeElement.setAttribute('style','color:blue');
    this.contentChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
    

    
  }
  ngAfterContentChecked(): void {
    console.log('child ngaftercontentchecked called.....');
    this.contentChild.nativeElement.setAttribute('style',`color:${this.parentData}`);
  }
  ngAfterViewInit(): void {
    console.log('child afterviewinit called....', this.viewchild);
    // this.viewchild.nativeElement.setAttribute('style','background-color:yellow');
    this.viewchild.nativeElement.setAttribute('style',`background-color:${this.parentData}`);
    
    
  }
  ngAfterViewChecked(): void {
    console.log('child afterviewchecked called....', this.viewchild);
    this.viewchild.nativeElement.setAttribute('style',`background-color:${this.parentData}`);
  }
  ngOnDestroy(): void {
    console.log('child ondestroy called....');
    clearInterval(this.interval);
    
  }
  

}
