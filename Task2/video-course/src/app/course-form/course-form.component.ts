import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VcourseService } from '../vcourse.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class CourseFormComponent {

  constructor(private router:Router,private route:ActivatedRoute,private vservice:VcourseService){

  }
  
  ngOnInit(){
    this.getEditCourseData();
  }

  getEditCourseData(){
    this.route.params.subscribe((params:any)=>{
      if(params.id){
        this.formValues=this.vservice.getCourse(params.id);
        console.log(this.formValues);
      }
    })
  }
  
  formValues={
    videoTitle: '',
    description: '',
    date: '',
    duration: '',
    authors: '',
    id:''
  };

  onType(event:any){
    let inputValue:string=event.target.value;
    let inputName:string =event.target.name;
    this.formValues={
      ...this.formValues,
      [inputName]:inputValue
    };
  }

  getDate(event:any){
    this.formValues.date=event.target.value;
  }

  onSave(){
    console.log(this.formValues);
    if(this.formValues.id!=''){
      this.vservice.updateCourse(this.formValues);
    }else{
      this.vservice.addCourse(this.formValues);
    }
    this.clear();
  }

  onCancel(){
    this.clear();
  }

  clear(){
    this.formValues={
      videoTitle: '',
      description: '',
      date: '',
      duration: '',
      authors: '',
      id:''
    };
  }

  renderCourseForm(){
    console.log("Course form is rendered");
  }

}
