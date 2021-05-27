import { Injectable } from '@angular/core';
import User from './entity/User';
import { HttpClient } from "@angular/common/http";
const BASE_URL = "http://localhost:3000/users";
@Injectable()//Bean
export  class UserService { //public = export
    constructor(private http: HttpClient) { }
    getUsers() {
        return this.http.get(BASE_URL);
    }
    getUsersByName(firstname:any) {
        return this.http.get(BASE_URL+"?firstname="+firstname);
    }

    save(user: User) {
        console.log(user);
        return this.http.post(BASE_URL, user, {
            headers: {
                "content-type": "application/json"
            }
        });
    }
}
export interface MyIn{ //for learning purpose only

}
export default class A{
    
}