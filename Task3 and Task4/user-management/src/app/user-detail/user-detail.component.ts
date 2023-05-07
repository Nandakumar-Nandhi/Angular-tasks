import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/user';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent {
  selectedUser!:User;
  id?:string;

  constructor(private route:ActivatedRoute,private userService:UserService){
    
  }
  
  ngOnInit(){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get("id") || "0";
      this.setSelectedUser(this.id);
    });
  }

  setSelectedUser(id:string){
    this.userService.getUser(id).subscribe(user=>{
      this.selectedUser=user;
    });
  }
  
}
