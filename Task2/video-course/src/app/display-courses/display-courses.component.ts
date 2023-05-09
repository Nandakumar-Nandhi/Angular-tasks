import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormType } from 'src/formType';
import { VcourseService } from '../vcourse.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-courses',
  templateUrl: './display-courses.component.html',
  styleUrls: ['./display-courses.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class DisplayCoursesComponent {
  
  constructor(private videoService:VcourseService,private router:Router,private route:ActivatedRoute){
    
  }

  courses:FormType[]=[];
  allCourses:FormType[]=[];
  inputValue:string='';

  ngOnInit(){
    this.getCourses();
  }

  render() : string{
    console.log("I am from Video Courses");
    return "Hello World";
  }

  getCourses(){
    this.allCourses = this.videoService.getCourses();
    this.courses=this.allCourses;
  }

  
  addCourse(){
    this.router.navigate(['../new-course'],{relativeTo:this.route});
  }  

  deleteCourse=(id:string):void=>{
    this.videoService.deleteCourse(id);
    this.getCourses();
  }

  loadMore(){
    this.videoService.loadMore();
    this.getCourses();
  }

  searchVideos(){
    this.courses = this.allCourses.filter((course)=>{
      return course.description.includes(this.inputValue) || 
            course.authors.includes(this.inputValue) || 
            course.videoTitle.includes(this.inputValue);
    })
  }

  onType(event:any){
    this.inputValue=event.target.value;
  }

  renderDisplayCourses(){
    console.log("Display courses rendered");
  }

}
