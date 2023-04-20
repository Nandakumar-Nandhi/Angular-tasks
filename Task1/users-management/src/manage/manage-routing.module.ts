import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserDetailComponent } from 'src/app/user-detail/user-detail.component';

const routes: Routes = [
  {
    path:'',
    component:ManageUserComponent,
    children:[
      {
        path:':id',
        component:UserDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
