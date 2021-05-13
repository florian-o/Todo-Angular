import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoService } from '../services/todo.services';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit,OnDestroy {

todos:any[];
name:string = this.constructor.name;
errorMsg:string="";
todoSub:Subscription;
  
constructor(private TodoServices:TodoService,private router:Router) { }

  ngOnInit(): void {
    //this.todos =this.TodoServices.todos;   
  this.todoSub = this.TodoServices.todoSubject.subscribe(
    (data:any[])=>{this.todos = data;console.log(data);
    },
    (err)=>{console.log(err);}    
  )
  this.TodoServices.emitTodos();
};
  onChangeStatus(i:number){    
    this.TodoServices.onChangeStatus(i);  
  }
  onChangeIsModif(i:number){
    this.TodoServices.onChangeIsModif(i);
  }
  onView(id:number){        
    this.router.navigate(["single-todo",id]);
  } 
  ngOnDestroy():void{
    this.todoSub.unsubscribe();
  }
}
