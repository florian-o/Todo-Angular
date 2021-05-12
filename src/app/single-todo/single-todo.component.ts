import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.services';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {

  temp:number;
  todo:any;
  error:string;
  constructor(private routes:ActivatedRoute,private todoService:TodoService) { }

  ngOnInit(): void {
    
    const id = +this.routes.snapshot.params['id'];
    this.todo = this.todoService.getTodo(id)
   
    if (!this.error) {
      this.error = "la tache n'existe pas !";
    }

  }

}
