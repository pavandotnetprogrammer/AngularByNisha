import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrl: './product-widget.component.scss'
})
export class ProductWidgetComponent implements OnInit, AfterContentInit   {

  @Input() products:any[]=[];
  @ContentChild('head') contentHeader!:ElementRef;
  @ContentChildren('head2') contentHeaders!:QueryList<any>;
  constructor(){}

  ngOnInit(): void {

    //debugger;
    //console.log(this.products);
    //console.log(this.contentHeader); //same as for view child, we can't access content projected elements in oninit. we need to access it in ngAfterContentInit life cycle hook.
  }

  ngAfterContentInit(): void {
    //console.log(this.contentHeader);
    this.contentHeader?.nativeElement.setAttribute('style','color:blue');
    this.contentHeaders?.first?.nativeElement.setAttribute('style','color:green');
    this.contentHeaders?.last?.nativeElement.setAttribute('style','color:green');
  }

}
