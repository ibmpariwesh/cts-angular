import { Component, OnInit } from '@angular/core';
import User from './entity/User';
import A, {UserService, MyIn} from './UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  constructor(private userService: UserService) { }//DI
  user: User = new User();
  users:User[]=[];
  ngOnInit(){ //bean - pre processors
    const promise = this.userService.getUsers();
    promise.subscribe((response) =>{
      console.log(response);
      this.users=response as User[];
    });
  }
  save() {
    console.log(this.user.firstname);
    const promise = this.userService.save(this.user);
    promise.subscribe(
      function (response) {//success handler, 100-399
        console.log(response);
        alert('added successfully.')
      },
      function (error) {//error handler, 400-599
        alert(error.message);
      },
      function (){ //complete handler
        console.log('audit ..always called..');
      });
  }
}
