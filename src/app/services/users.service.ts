import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users:User[]=[];
  userSubject = new Subject<User[]>();
  constructor() { }

emitUser():void{
  this.userSubject.next(this.users);
}
  addUser(user:User):void{    
    this.users.push(user);
    this.emitUser();    
  }


}
