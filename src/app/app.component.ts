import { Component } from '@angular/core';
import User from './entity/User';
import UserService from './UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private userService:UserService){}
  title = ''; //property
  user:User = new User();
  
  save(){
    console.log(this.user.firstname);
    const promise = this.userService.save(this.user);    
    promise.subscribe(function(response){
      console.log(response);
    })
  }
}
