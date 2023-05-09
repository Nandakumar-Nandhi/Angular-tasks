import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'change-detection';
  renderApp(){
    console.log("App component rendered");
  }
  
}
