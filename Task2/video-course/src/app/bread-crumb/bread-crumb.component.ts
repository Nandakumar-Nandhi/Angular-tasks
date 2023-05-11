import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, ChildActivationStart, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class BreadCrumbComponent {
  
  showNewCourse=false;
  constructor(private router: Router,private route:ActivatedRoute,private cdr:ChangeDetectorRef){
    
  }

  ngOnInit(){
   
  }

  renderBreadcrumb(){
    console.log("BreadCrumb is rendered");
  }
  
}
