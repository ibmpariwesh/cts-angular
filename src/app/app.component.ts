import { Component, OnInit } from '@angular/core';
import User from './entity/User';
import A, { UserService, MyIn } from './UserService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) { }//DI
  user: User = new User(); //state
  users: User[] = []; //state
  order: boolean = false;
  ngOnInit() { //bean - pre processors
    const promise = this.userService.getUsers();
    promise.subscribe((response) => {
      console.log(response);
      this.users = response as User[];
    });
  }
  sort() {
    this.users.sort((user1, user2) => { return (this.order) ? user1.age - user2.age : user2.age - user1.age });
    this.order = !this.order;
  }
  search(){
    const element1= document.getElementById("firstname");
    const firstName1 = ( element1 as HTMLInputElement).value;
    if(!firstName1)
      return;
    const promise = this.userService.getUsersByName(firstName1);
    promise.subscribe((response) => {
      this.users = response as User[];
    },
    errorHandler);
  }
  save() {
    console.log(this.user.firstname);
    const promise = this.userService.save(this.user);
    promise.subscribe(
      function (response) {//success handler, 100-399
        console.log(response);
        alert('added successfully.')
      },
      errorHandler,
      function () { //complete handler
        console.log('audit ..always called..');
      });
  }
}
function errorHandler(error:any) {//error handler, 400-599
  alert(error.message);
}