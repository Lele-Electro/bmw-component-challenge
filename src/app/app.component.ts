import { Component } from '@angular/core';
import { ModelDataService } from './services/model-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent{
  title = 'BMW-Front-End-Test';

  constructor(private modelService: ModelDataService){}


}
