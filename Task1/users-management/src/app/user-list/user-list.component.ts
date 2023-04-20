import { Component, Input } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users!:User[];
  @Input() callBack!:(user:User)=>void;
  @Input() btnName!:string;
}
