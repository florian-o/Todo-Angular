import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable, Subject, Subscriber, Subscription } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit ,OnDestroy {


  user:Subscription
  userData;

  constructor(private userservice:UsersService,private router:Router) { 
 
  }

  ngOnInit(): void {     
   
      
        if(localStorage.getItem('token')){
          this.userData = this.userservice.getProfile().subscribe(
          (userData:any)=>{this.userData=userData;}       
          )      
        }
     
    }    
     ngOnDestroy() {      
      this.user.unsubscribe();
    }
    onLogout(){    
      delete this.userData;
      localStorage.removeItem('token');
      this.router.navigate(['/user/login'])

    }
}


