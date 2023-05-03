import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageRoutingModule } from './manage-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManageUserComponent,
    EditUserComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ManageModule { }
