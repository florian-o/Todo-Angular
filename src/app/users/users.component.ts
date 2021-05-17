import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {

  users:User[];
  userSub:Subscription;

  constructor(private userDataService:UsersService) { }

  ngOnInit(): void {

   this.userSub = this.userDataService.userSubject.subscribe(
     (user:User[])=>{this.users=user;},
     (err:any)=> {"erreur"+console.log(err);},
     ()=>{console.log("user service connected");
     }
     )
     this.userDataService.emitUser();
  }

ngOnDestroy(){
  this.userSub.unsubscribe();
}
}
