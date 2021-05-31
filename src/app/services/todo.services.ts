import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Todo } from "../models/todo.models";
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable()

export class TodoService implements OnInit,OnDestroy{

  todos:Todo[];  
  todoSubject=new Subject<Todo[]>();

  tokenHeader = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})


  readonly baseUrl = 'https://localhost:44322/api/Todo';
  
constructor(private http:HttpClient){
  this.getAllTodo();
}

ngOnInit(){
 
}

  refreshList():void{
    this.getAllTodo();
  }
    emitTodos(){ 
      this.todoSubject.next(this.todos);
    }

    onChangeStatus(i:number):void{    
           this.todos[i].todoStatus = !this.todos[i].todoStatus;
           this.http.put(this.baseUrl, this.todos[i]).subscribe(
            ()=> { 
              this.emitTodos();  
            },
            (err) => { console.log("erreur :" + err);
            },
            ()=> console.log("Data recuperer"), 
          );    
          this.refreshList();     
    } 

    onChangeIsModif(i:number):void{
      this.todos[i].isModif = !this.todos[i].isModif;
      this.http.put(this.baseUrl, this.todos[i],{headers:this.tokenHeader}).subscribe(
          ()=> { 
            this.emitTodos();  
          },
          (err) => { console.log("erreur :" + err);
          },
          ()=> console.log("Data recuperer"), 
        );    
        this.refreshList(); 
   }

    getTodo(index:number):any{
      if (this.todos[index]) {
        return this.todos[index];
      }
    return false;
    }

    saveTodo(todo:Todo):void{  
    this.http.post<any>(this.baseUrl,todo,{headers:this.tokenHeader})
    .subscribe(
      (resp) => {
       this.todos = resp;
        this.emitTodos();},
      (err) =>console.log("erreur" + err)      
    )
    this.refreshList();
  }

    onDelete(id:number){
      this.http.delete(this.baseUrl+"/"+id,{headers:this.tokenHeader})   
        .subscribe(
        () => {         
          this.todos = this.todos.filter(todo => todo.todoId != id);
          console.log(id);
                   
           this.emitTodos();},
          (err)=> console.log(err),   
      )
      this.refreshList();
    }

    getAllTodo():void{
        this.http.get<Todo[]>(this.baseUrl,{headers:this.tokenHeader})
        .subscribe(
          (todos:Todo[])=> {
            console.log(todos);
            
            this.todos = todos as Todo[];
            this.emitTodos();
          },
          (err) => { console.log("erreur :" + err);
          },
          ()=> console.log("Data recuperer"), 
        ); 
    }

   ngOnDestroy(){
   this.todoSubject.unsubscribe();
   }
}