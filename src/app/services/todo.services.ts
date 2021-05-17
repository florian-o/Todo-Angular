import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Todo } from "../models/todo.models";
import { HttpClient } from "@angular/common/http";
import { emit } from "process";

@Injectable()

export class TodoService implements OnInit,OnDestroy{

  todos:Todo[];  
  todoSubject=new Subject<Todo[]>();

  readonly baseUrl = 'https://localhost:44322/api/Todo'
constructor(private http:HttpClient){}

ngOnInit(){

}


    emitTodos(){
      this.todoSubject.next(this.todos);
    }

    onChangeStatus(i:number):void{    
           this.todos[i].todoStatus = !this.todos[i].todoStatus;
           this.emitTodos();    
    }
    onChangeIsModif(i:number):void{
      this.todos[i].isModif = !this.todos[i].isModif;
      this.emitTodos();
    }
    getTodo(index:number):any{
      if (this.todos[index]) {
        return this.todos[index];
      }
    return false;
    }
    saveTodo(todo:Todo):void{
    //this.todos.unshift(todo);
    this.http.post<any>(this.baseUrl,todo)
    .subscribe(
      (resp) => {
       this.todos = resp;
        this.emitTodos();},
      (err) =>console.log("erreur" + err)      
    )
   
    //this.todoSubject.next(this.todos);
    }
    getAllTodo():any{
       this.http.get<any[]>(this.baseUrl)
       .subscribe(
        (data:any) =>{
          console.log(data);          
           this.todos = data;
           this.emitTodos();
        }        
       )  
      // this.emitTodos();   
    }
   ngOnDestroy(){
    this.todoSubject.unsubscribe();
   }
}