import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VideoCoursesComponent } from './video-courses/video-courses.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { DisplayCoursesComponent } from './display-courses/display-courses.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:':userName',component:VideoCoursesComponent,
    children:[
      {path:'',redirectTo:'courses',pathMatch:'full'},
      {path:'courses',component:DisplayCoursesComponent},
      {path:'new-course',component:CourseFormComponent},
      {path:'new-course/:id',component:CourseFormComponent},
    ]
  },
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
