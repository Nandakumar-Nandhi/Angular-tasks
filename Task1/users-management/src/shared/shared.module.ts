import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from 'src/app/user/user.component';
import { UserDetailComponent } from 'src/app/user-detail/user-detail.component';
import { UserListComponent } from 'src/app/user-list/user-list.component';

@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserComponent,
    UserDetailComponent,
    UserListComponent
  ]
})
export class SharedModule {
  
 }
