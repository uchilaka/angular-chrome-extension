import { Component } from '@angular/core';
import { RunContextService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-chrome-extension';

  constructor(private context: RunContextService) {}
}
