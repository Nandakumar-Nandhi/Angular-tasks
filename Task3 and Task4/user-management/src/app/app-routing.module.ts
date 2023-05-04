import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActiveUserComponent } from 'src/active/active-user/active-user.component';
import { DeletedUserComponent } from 'src/deleted/deleted-user/deleted-user.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'active',component:ActiveUserComponent},
  {path:'deleted',component:DeletedUserComponent},
  {
    path:'manage',
    loadChildren:()=>import('../manage/manage.module').then(module=>module.ManageModule)
  },
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
