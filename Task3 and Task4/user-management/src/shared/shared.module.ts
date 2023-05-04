import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from 'src/app/user/user.component';
import { UserDetailComponent } from 'src/app/user-detail/user-detail.component';
import { UserListComponent } from 'src/app/user-list/user-list.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { FullNamePipe } from 'src/app/pipes/full-name.pipe';
import { StatusPipe } from 'src/app/pipes/status.pipe';

@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserListComponent,
    FilterPipe,
    FullNamePipe,
    StatusPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserComponent,
    UserDetailComponent,
    UserListComponent,
    FilterPipe,
    FullNamePipe,
    StatusPipe
  ]
})
export class SharedModule {
  
 }
