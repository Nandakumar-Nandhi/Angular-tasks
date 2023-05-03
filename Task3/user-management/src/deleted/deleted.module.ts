import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedUserComponent } from './deleted-user/deleted-user.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    DeletedUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DeletedModule { }
