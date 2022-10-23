import { Component } from '@angular/core';
import { faBootstrap, faAngular, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';

  faBootstrap = faBootstrap;
  faAngular = faAngular;
  faFontAwesome = faFontAwesome;


}
