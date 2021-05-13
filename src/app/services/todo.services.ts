import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Todo } from "../models/todo.models";

@Injectable()

export class TodoService{

  todos:Todo[];  
  todoSubject=new Subject<Todo[]>();

constructor(){
  
setTimeout(()=>{
  this.todos  = [
    {
      todoName: "Projet 1",
      todoStatus: true,
      image:"https://placeimg.com/300/300/tech",  
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui adipisci voluptates, nesciunt delectus deserunt eveniet itaque! Accusantium commodi voluptas consequuntur, eaque sapiente porro, earum error a ab distinctio nulla.",
      isModif:false, 
      todoDay:new Date()
    },
    {
      todoName: "Projet 2",
      todoStatus: false,
      image:"https://placeimg.com/300/300/tech", 
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui adipisci voluptates, nesciunt delectus deserunt eveniet itaque! Accusantium commodi voluptas consequuntur, eaque sapiente porro, earum error a ab distinctio nulla.",
      isModif:false,   
      todoDay:new Date()
    },
    {
      todoName: "Projet 3",
      todoStatus: true,
      image:"https://placeimg.com/300/300/tech",
      description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas qui adipisci voluptates, nesciunt delectus deserunt eveniet itaque! Accusantium commodi voluptas consequuntur, eaque sapiente porro, earum error a ab distinctio nulla.",
      isModif:false,  
      todoDay:new Date()  
    },
    ];
    this.emitTodos();
},1000);
  
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
    this.todos.unshift(todo);
    this.emitTodos();
    //this.todoSubject.next(this.todos);
    }
   
}