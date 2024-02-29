import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, Subscription, filter } from 'rxjs';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrl: './productdashboard.component.scss'
})
export class ProductdashboardComponent implements OnInit, OnDestroy {

  constructor(){
    //debugger;
    //console.log("at product dashboard component");
  }
  mySubscription!:Subscription;


  ngOnInit(): void {
    //promise
    // const promise=new Promise(resolve=>{
    //   console.log('promise call....');
    //   setTimeout(() => {
    //     resolve('promise working');
    //     resolve('promise working1');
    //     resolve('promise working2');
    //     resolve('promise working3');
        
    //   }, 1000);
    // });

    //promise.then(res=>console.log(res));

    //observable
    // const observable=new Observable(sub=>{
    //   console.log("observable call....");
    //   setTimeout(() => {
    //     sub.next('observable working');
    //     sub.next('observable working1');
    //     sub.next('observable working2');
    //     sub.next('observable working3');
        
    //   }, 1000);
    // });
    // observable
    // .pipe(filter(f=>f==='observable working1'))
    // .subscribe(res=>console.log(res));

    // const observable=new Observable(sub=>{
    //   console.log('observable call...');
    //   let counter=0;
    //   setInterval(()=>{
    //     counter+=1;
    //     sub.next(counter);
    //   },1000);
    // });
    // this.mySubscription=observable.subscribe(res=>console.log(res));

    //difference between observable and subject
    //const observable=new Observable(obj=>obj.next(Math.random()));

    //subscriber 1
    //observable.subscribe(res=>console.log(res));

    //subscriber 2
    //observable.subscribe(res=>console.log(res));
    

    // //subject
    // const subject=new Subject();    

    // //subscriber 1
    // subject.subscribe(d=>console.log(d));
    

    // //subscriber 2
    // subject.subscribe(d=>console.log(d));

    // subject.next(Math.random());

    //example 2
    // const subject=new Subject();
    // const data=ajax("https://jsonplaceholder.typicode.com/users");
    // //data.subscribe(res=> console.log(res));
    // //data.subscribe(res=>console.log(res));

    // subject.subscribe(res=> console.log(res));
    // subject.subscribe(res=>console.log(res));

    // const res=data.subscribe(subject);

    //subject vs Behaviour Subject
    //subject
    // const subject=new Subject();

    // subject.subscribe(d=>console.log(`Subject subscriber 1: ${d}`));
    // subject.next(2020);
    // subject.subscribe(d=>console.log(`Subject subscriber 2: ${d}`));//returned nothing.
    // subject.next(2040);
    

    // //Behaviour subject //in case of Bhehaviour subject, no need to call next method, as soon as we subscribe, it will take the initial value and produces the output.
    // const bSubject=new BehaviorSubject<number>(12);
    // bSubject.subscribe(d=>console.log(`Behaviour Subject subscriber1: ${d}`));
    // bSubject.next(200);
    // bSubject.subscribe(d=>console.log(`Behaviour Subject subscriber2: ${d}`));
    // bSubject.next(500);


    //Replay subject
    // const message=new ReplaySubject();// if we don't specify buffer size then it will emit all the old values.
    // const message=new ReplaySubject(2);//if we specify bugger size, then it will emit last recent no. of elements from the list.
    // message.next('Hello...');
    // message.next('How are you...');
    // message.next('from where are you...');
    // message.next('stay at home...');

    // message.subscribe(msg=> console.log(`user 1 ${msg}`));

    // message.next("get vaccinated......");
    // message.next('keep learning.....');
    // message.subscribe(msg=> console.log(`user 2 ${msg}`));
    
    //async subject
    // const asyncSubject=new AsyncSubject();
    // asyncSubject.next("value1");
    // asyncSubject.next("value2");
    // asyncSubject.next("value3");
    

    // asyncSubject.subscribe(res=>console.log(`user 1: ${res}`));
    // asyncSubject.complete();// async subject will not emit any values until and unless, we call the complete method. and it emits only recent last element from the list.
    // asyncSubject.next("value4");
    // asyncSubject.next("value5");
    // asyncSubject.complete();// no matter how many times we call complete function, it will only take intial complete result set and returns the last element from the list to all of it's subscribers.
    // asyncSubject.subscribe(res=>console.log(`user 2: ${res}`));

    const url="https://restcountries.com/v3.1/name/india";

    const cache:any={};

    function getCountryInfo(url:any){
      if(!cache[url]){
        //api call using fetch
        cache[url]=new AsyncSubject();
        fetch(url).then(res=>res.json())
        .then(d=>{
          cache[url].next(d);
          cache[url].complete();
        })
      }
      return cache[url].asObservable();
    }

    getCountryInfo(url).subscribe((d:any)=>console.log(d));
    

    

    
  }
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

}
