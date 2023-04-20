import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActiveModule } from 'src/active/active.module';
import { DeletedModule } from 'src/deleted/deleted.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    DeletedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
