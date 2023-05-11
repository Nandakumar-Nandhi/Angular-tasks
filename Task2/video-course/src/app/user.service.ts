import { Injectable } from '@angular/core';
import { Users } from 'src/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  findUser(email:string,password:string){
    let foundUser = Users.find((user)=>{
      return user.email===email && user.password===password;
    });
    console.log("foundUser in service ",foundUser);
    
    return foundUser;
  }

}
