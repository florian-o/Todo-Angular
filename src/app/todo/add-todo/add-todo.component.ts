import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.models';
import { TodoService } from 'src/app/services/todo.services';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todo = new Todo();
  constructor(private todoservice:TodoService,private router:Router) { }

  ngOnInit(): void {
  }
onSubmit():void{
  console.log(this.todo);
  
this.todoservice.saveTodo(this.todo);
this.router.navigate(["/todos"]);
}
}
