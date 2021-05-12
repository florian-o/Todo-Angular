import { Injectable } from "@angular/core";

@Injectable()

export class TodoService{

    todos:any[] = [
        {
          todoName: "Projet 1",
          todoStatus: true,
          image:"https://via.placeholder.com/150",  
          isModif:false, 
          todoDay:new Date()
        },
        {
          todoName: "Projet 2",
          todoStatus: false,
          image:"https://via.placeholder.com/150", 
          isModif:false,   
          todoDay:new Date()
        },
        {
          todoName: "Projet 3",
          todoStatus: true,
          image:"https://via.placeholder.com/150",
          isModif:false,  
          todoDay:new Date()  
        },
        ];
      
    onChangeStatus(i:number){    
           this.todos[i].todoStatus = !this.todos[i].todoStatus;    
    }
    onChangeIsModif(i:number){
      this.todos[i].isModif = !this.todos[i].isModif;
    }
    getTodo(index:number){
      if (this.todos[index]) {
        return this.todos[index];
      }
    return false;
    }
}