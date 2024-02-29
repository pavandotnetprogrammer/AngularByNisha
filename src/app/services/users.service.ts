import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return [
      {id:101,name:'john',city:'DELHI',salary:2,dob:new Date("05/10/1989")},
      {id:102,name:'peter',city:'PUNE',salary:80000,dob:new Date("05/12/1985")},
      {id:103,name:'omed',city:'GOA',salary:190000,dob:new Date("10/10/1991")},
      {id:104,name:'kunal',city:'DELHI',salary:55000,dob:new Date("12/18/1987")},
    ];
  }
  getAllUsersFromHttpAPI(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(catchError(this.handleError));
  }
  private handleError(error:HttpErrorResponse){
debugger;
console.log(error);
    //return throwError('something happened!! please try again later!!!', error.error.message);
    return throwError(error.message);

  }

  getUserById(id:number){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
  }
}
