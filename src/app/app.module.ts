import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { TodoService } from "./services/todo.services";
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { RouterModule, Routes } from "@angular/router";

export const ROUTES:Routes=[
  {path:'home',component:HomeComponent},
  {path:'todos',component:TodoComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'single-todo/:id',component:SingleTodoComponent},
  {path:'',component:HomeComponent},


];

@NgModule({

  declarations:[
    AppComponent,
    HeaderComponent,
    TodoComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTodoComponent,
   
  ],
  imports:[
    BrowserModule,    
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers:[TodoService],
  bootstrap: [AppComponent]
})

export class AppModule{}