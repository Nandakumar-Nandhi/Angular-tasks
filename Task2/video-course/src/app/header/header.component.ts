import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  constructor(private router:Router,private route:ActivatedRoute,private cdr:ChangeDetectorRef){

  }

  userName?:string;

  ngOnInit(){
    this.subscribe();
  }

  subscribe(){
    this.router.events.subscribe((data)=>{
      if(data instanceof RoutesRecognized){
        console.log(data.state.root.firstChild?.params['userName'],"from ngONINIT");
        this.userName=data.state.root.firstChild?.params['userName'];
        this.cdr.markForCheck();
      }
    });
  }

  renderHeader(){
    console.log("Header is rendered");
  }

}
