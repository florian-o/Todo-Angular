import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { TodoService } from "./services/todo.services";
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from "@angular/router";
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { SingleTodoComponent } from "./todo/single-todo/single-todo.component";
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './users/add-user/add-users.component';
import { HttpClientModule } from "@angular/common/http";
export const ROUTES:Routes=[
  {path:'home',component:HomeComponent},
  {path:'todos',component:TodoComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'single-todo/:id',component:SingleTodoComponent},
  {path:'add-todo',component:AddTodoComponent},
  {path:'add-user',component:AddUsersComponent},
  {path:'users',component:UsersComponent},  
  {path:'',component:HomeComponent},
  {path:'**',pathMatch:'full',redirectTo:'not-found'}
];

@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    TodoComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTodoComponent,
    AddTodoComponent,
    UsersComponent,
    AddUsersComponent,   
  ],
  imports:[
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
  ],
  providers:[TodoService],
  bootstrap: [AppComponent]
})

export class AppModule{}