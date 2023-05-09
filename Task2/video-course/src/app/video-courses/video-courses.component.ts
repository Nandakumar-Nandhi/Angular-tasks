import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-courses',
  templateUrl: './video-courses.component.html',
  styleUrls: ['./video-courses.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class VideoCoursesComponent {

  constructor(private router: Router,private route:ActivatedRoute,private cdr:ChangeDetectorRef){
    
  }

  renderVideoCourses(){
    console.log("render Video Courses Page");
  }

}
