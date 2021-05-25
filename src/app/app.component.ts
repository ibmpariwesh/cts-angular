import { Component } from '@angular/core';
import User from './entity/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = ''; //property
  user:User = new User();
  
  save(){
    console.log(this.user.firstname);
    this.user.firstname='Ram';
  }
}
