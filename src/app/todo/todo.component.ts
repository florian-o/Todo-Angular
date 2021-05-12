import { Component, Injectable, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.services';

@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

todos:any[];
name:string = this.constructor.name;

  constructor(private TodoServices:TodoService) { }

  ngOnInit(): void {
    this.todos =this.TodoServices.todos;    
  }
  onChangeStatus(i:number){    
    this.TodoServices.onChangeStatus(i);  
  }
  onChangeIsModif(i:number){
    this.TodoServices.onChangeIsModif(i);
  }
 
}
