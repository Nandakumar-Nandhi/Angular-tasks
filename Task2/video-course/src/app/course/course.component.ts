import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormType } from 'src/formType';
import { VcourseService } from '../vcourse.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
  @Input() course!:FormType;
  @Input() callback!:(id:string)=>void;

  constructor(private router:Router,private route:ActivatedRoute,private vcourse:VcourseService){
    
  }

  onClickEdit(){
    this.router.navigate(['../new-course',this.course.id],{relativeTo:this.route});
  }


  renderCourse(){
    console.log("Course component rendered");
  }

}
