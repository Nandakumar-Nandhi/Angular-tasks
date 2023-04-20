import { Component } from '@angular/core';
import { User } from 'src/user';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent {

    users:User[]=[];
    btnName="Deactivate";
    constructor(private userService:UserService){

    }

    ngOnInit() : void{
      this.getUsers();
    }

    getUsers():void{
      this.users = this.userService.getUsers().filter((user)=>{
        return !user.isDeleted;
      });
      console.log(this.users);
    }

    deActivate = (user:User):void=>{
      user.isDeleted=true;
      this.getUsers();
    }

}
