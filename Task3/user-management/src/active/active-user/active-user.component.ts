import { Component } from '@angular/core';
import { filter, map } from 'rxjs/operators';
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
      this.userService.getUsers().subscribe(data=>{
        this.users=data;
      })
    }
    

    deActivate = (user:User):void=>{
      this.userService.deleteUser(user.id).subscribe(user=>{
        this.getUsers();
      });
    }

}
