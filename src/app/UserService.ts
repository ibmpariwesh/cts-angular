import { Injectable } from '@angular/core';
import User from './entity/User';

@Injectable()
export default class UserService{
    save(user:User){
        console.log(user);
    }
}