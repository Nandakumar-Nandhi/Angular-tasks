import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/user';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  id?:string;
  selectedUser?:User;

  constructor(private route:ActivatedRoute,private userService:UserService){

  }

  ngOnInit(){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get("id") || "0";
      this.setSelectedUser(this.id);
    })
  }

  editForm=new FormGroup({
    password:new FormControl(''),
    age:new FormControl(0)
  })

  setSelectedUser(id:string){
    this.userService.getUser(id).subscribe(user=>{
      this.selectedUser=user;
      this.editForm.setValue({
        password:this.selectedUser?.password || '',
        age:this.selectedUser?.age || 0
      })
    })
  }

  updateUser(){
    let id=this.selectedUser!.id;
    let values=this.editForm.value;
    this.userService.editUser(id,values).subscribe(u=>{
      this.setSelectedUser(id);
    })
  }
  
}
