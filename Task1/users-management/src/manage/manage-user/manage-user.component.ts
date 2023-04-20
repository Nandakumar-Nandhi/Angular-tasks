import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/user';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent {
    users:User[]=[];
    btnName="Details";

    constructor(public userService:UserService,private router:Router,private route:ActivatedRoute){

    }

    ngOnInit(){
      this.getUsers();
    }

    getUsers():void{
      this.users=this.userService.getUsers();
    }

    onSelect = (user:User):void=>{
      this.router.navigate([user.id],{relativeTo:this.route})
    }
}
