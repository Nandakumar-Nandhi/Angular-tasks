import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoCoursesComponent } from './video-courses/video-courses.component';
import { CourseComponent } from './course/course.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { TimeHoursPipe } from './pipes/time-hours.pipe';
import { LoginComponent } from './login/login.component';
import { DisplayCoursesComponent } from './display-courses/display-courses.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoCoursesComponent,
    CourseComponent,
    CourseFormComponent,
    TimeHoursPipe,
    LoginComponent,
    DisplayCoursesComponent,
    HeaderComponent,
    FooterComponent,
    BreadCrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
