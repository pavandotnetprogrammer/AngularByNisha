import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrl: './lifecyclehooks.component.scss'
})
export class LifecyclehooksComponent implements OnChanges, OnInit, DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {
  data:string="red";
  name!:string;
  price!:number;
  product:Product=new Product();

  constructor(){
    console.log('parent construcotr called..');    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent ngonchanges called...',changes);
    
  }

 
  ngOnInit(): void {
    console.log('parent ng oninit called.....');
    
  }
  ngDoCheck(): void {
    console.log('parent ngdocheck called...',this.product);
    
  }
  ngAfterContentInit(): void {
    console.log('parent ngaftercontentInit called.....');
    
  }
  ngAfterContentChecked(): void {
    console.log('parent ngaftercontentchecked called.....');
  }
  ngAfterViewInit(): void {
    console.log('parent afterviewinit called....');
    
    
  }
  ngAfterViewChecked(): void {
    console.log('parent afterviewchecked called....');
  }
  ngOnDestroy(): void {
    console.log('parent ondestroy called....');
    
  }
  handleData(info:any){
    this.data= info.target.value

  }
  updateProduct(){
    //this.product=new Product();
    this.product.name=this.name;
    this.product.price=this.price;

  }

  
}
