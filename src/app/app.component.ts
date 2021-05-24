import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = ''; //property
  firstname = 'John';
  lastname = "Travolta";
  save(){
    console.log(this.firstname);
    this.firstname='Ram';
  }
}
