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


  nbPairesSub:Subscription 
  secondes:number
  user:Subscription
  userData;

  constructor(private userservice:UsersService,private router:Router) { 
   
  }

  ngOnInit(): void {
      const secondesObs = interval(1000);
      
        this.nbPairesSub = secondesObs.subscribe(
          (val:number)=>this.secondes = val,
          (finish)=>{ console.log(finish+"ok")},    
        );
        
        this.user = this.userservice.userSubject.subscribe(
          (res:any)=> { this.userData = res;} 
        )
      
      
     
    }    
     ngOnDestroy() {
      this.nbPairesSub.unsubscribe();   
      this.user.unsubscribe();
    }
    onLogout(){    
      delete this.userData;
      localStorage.removeItem('token');
      this.router.navigate(['/user/login'])

    }
}


