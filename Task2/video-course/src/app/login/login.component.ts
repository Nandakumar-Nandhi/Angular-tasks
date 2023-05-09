import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  foundUser?:User;

  logged=true;

  loginValues={
    email:'',
    password:''
  };

  constructor(private userService : UserService,private router:Router,private route:ActivatedRoute){

  }

  onType(event:any){
    let inputValue:string=event.target.value;
    let inputName:string =event.target.name;
    this.loginValues={
      ...this.loginValues,
      [inputName]:inputValue
    };
  }

  login(){
    console.log(this.loginValues);
    this.foundUser = this.userService.findUser(this.loginValues.email,this.loginValues.password);
    console.log("foundUser is ",this.foundUser);
    
    if(this.foundUser){
      this.router.navigate(["../",this.foundUser.name],{relativeTo:this.route})
    }else{
      this.loginValues={
        email:'',
        password:''
      }
      this.logged=false;
    }
  }

  renderLogin(){
    console.log("Login page rendered");
  }
}
