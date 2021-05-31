import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;
  userSub:Subscription;

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userSub = this.userService.getProfile().subscribe(
      (r:any)=> this.user = r,
      
    )
  //  console.log(this.user);
    
  }

}
