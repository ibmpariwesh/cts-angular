import { Injectable } from '@angular/core';
import User from './entity/User';
import { HttpClient } from "@angular/common/http";

@Injectable()//Bean
export default class UserService{
    constructor(private http:HttpClient){ }
    save(user:User){
        console.log(user);
        return this.http.post("http://localhost:3000/users",user,{
            headers:{
                "content-type":"application/json"
            }
        });
    }
}