import { Component } from '@angular/core';
import { sdService } from './Services-1/sd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[sdService]
})
export class AppComponent {
  title = 'hotel-inventory';
  constructor(private inst:sdService){}
}
