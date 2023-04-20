import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUserComponent } from './active-user/active-user.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    ActiveUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ActiveModule { }
