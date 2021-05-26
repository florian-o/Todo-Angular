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
import { AddUsersComponent } from './users/regitration/registration.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LoginComponent } from './users/login/login.component';
import { UsersComponent } from "./users/users.component";
import { AuthGuard } from "./auth/auth.guard";

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr-FR');


export const ROUTES:Routes=[
  {path:'home',component:HomeComponent},
  {path:'todos',component:TodoComponent,canActivate:[AuthGuard]},
  {path:'not-found',component:NotFoundComponent},
  {path:'single-todo/:id',component:SingleTodoComponent,canActivate:[AuthGuard]},
  {path:'add-todo',component:AddTodoComponent,canActivate:[AuthGuard]},
  {path:'user',component:UsersComponent,
  children:[
    {path:'registration',component:AddUsersComponent},
    {path:'login',component:LoginComponent},  
  ]
},
  {path:'',redirectTo:'user/registration',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
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
    LoginComponent, 
    UsersComponent,
    AddUsersComponent,
   
  ],
  imports:[
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar:true,
    }),
  ],
  providers:[TodoService,
  {provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})

export class AppModule{}