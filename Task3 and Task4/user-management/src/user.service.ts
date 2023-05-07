import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  usersURL="http://localhost:3000/users"
  
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.usersURL);
  }

  getUser(id:string):Observable<User>{
    const url=this.usersURL+"/"+id;
    return this.http.get<User>(url);
  }

  deleteUser(id:string):Observable<User>{
    const url=this.usersURL+"/"+id;
    let delUser=this.http.patch<User>(url,{
      isDeleted:true
    })
    return delUser;
  }

  activateUser(id:string):Observable<User>{
    const url=this.usersURL+"/"+id;
    let activatedUser=this.http.patch<User>(url,{
      isDeleted:false
    })
    return activatedUser;
  }

  createUser(user:any):Observable<User>{
    const url=this.usersURL;
    let newUser=this.http.post<User>(url,{
      ...user
    });
    return newUser;
  }

  editUser(id:string,values:any):Observable<User>{
    const url=this.usersURL+"/"+id;
    let now=new Date();
    let updatedUser=this.http.patch<User>(url,{
      ...values,
      lastUpdated:now
    });
    return updatedUser;
  }

}
