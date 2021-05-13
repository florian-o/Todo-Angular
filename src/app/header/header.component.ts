import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy {


  nbPairesSub:Subscription
 
  secondes:number

  constructor() { }

  ngOnInit(): void {
      const secondesObs = interval(1000);
      
        this.nbPairesSub = secondesObs.subscribe(
          (val:number)=>this.secondes = val,
          (finish)=>{ console.log(finish+"ok")},    
        );
    }    
     ngOnDestroy() {
      this.nbPairesSub.unsubscribe();   
    }
}


