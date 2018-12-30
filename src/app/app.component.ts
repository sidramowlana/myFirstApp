import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //External Template
  templateUrl: './app.component.html',
  //Innerline template
  /*template: `
    <app-server></app-server>
    <app-server></app-server>`,*/

  //External style
  styleUrls: ['./app.component.css']
 //Inline style
  /*styles: [`
  h3 {
    color: dodgerblue;
  }
  `]*/
})
export class AppComponent {
 
}
