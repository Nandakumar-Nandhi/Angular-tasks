import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  constructor(private fb:FormBuilder,private userService:UserService){

  }

  // registrationForm=new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName:new FormControl(''),
  //   age:new FormControl(),
  //   login:new FormControl(''),
  //   password:new FormControl(''),
  //   isDeleted:new FormControl(false)
  // })

  registrationForm=this.fb.group({
    firstName:['',Validators.required], // 0th index -> represents default value
    lastName:['',Validators.required],
    age:["",Validators.required],
    login:['',Validators.required],
    password:['',Validators.required],
    isDeleted:[false]
  })

  getUniqueId() : string{    
    let uniqueId=Date.now()+((Math.random()*100000).toFixed());
    return uniqueId;
  }  


  submitForm(){
    let now=new Date();
    let user=this.registrationForm.value;
    const newUser={
      id: this.getUniqueId(),
      ...user,
      lastUpdated: now
    }
    this.userService.createUser(newUser).subscribe(u=>{
      this.registrationForm.reset();
      location.reload();
    });
  }
}
