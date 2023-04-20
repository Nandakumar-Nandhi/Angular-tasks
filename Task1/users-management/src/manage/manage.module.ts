import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageRoutingModule } from './manage-routing.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    SharedModule
  ]
})
export class ManageModule { }
