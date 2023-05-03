import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserDetailComponent } from 'src/app/user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {
    path:'',
    component:ManageUserComponent,
    children:[
      {
        path:'create',
        component:CreateUserComponent
      },
      {
        path:':id',
        component:UserDetailComponent
      },
      {
        path:'edit/:id',
        component:EditUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
