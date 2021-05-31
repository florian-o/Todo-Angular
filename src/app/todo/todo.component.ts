import { Component, Injectable, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Todo } from '../models/todo.models';
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

todos:Todo[];
name:string = this.constructor.name;
errorMsg:string="";
todoSub:Subscription;

@ViewChild('closebutton') closebutton
  
constructor(private TodoServices:TodoService,private router:Router,private toast:ToastrService) {

 }

  ngOnInit(): void {
        
 this.todoSub = this.TodoServices.todoSubject.subscribe(
 (value:any[])=>{
   this.todos = value;
  },
  (err) => console.log(err),
)
this.TodoServices.emitTodos();  
}

  onChangeStatus(i:number){     
    this.TodoServices.onChangeStatus(i);  
  }
  onChangeIsModif(i:number){    
    this.toast.success('Modification effectuer')
    this.TodoServices.onChangeIsModif(i);
    
  }
  onView(id:number){        
    this.router.navigate(["single-todo",id]);
  } 
  onDelete(id:number){  
    this.TodoServices.onDelete(id); 
    this.toast.info('tache supprimer');  
  }
  ngOnDestroy():void{
   this.todoSub.unsubscribe();
  }
}
