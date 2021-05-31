import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { AuthGuard } from './auth/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './todo/single-todo/single-todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './users/regitration/registration.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';

 const ROUTES:Routes=[
  {path:'home',component:HomeComponent},
  {path:'todos',component:TodoComponent,canActivate:[AuthGuard]},
  {path:'not-found',component:NotFoundComponent},
  {path:'single-todo/:id',component:SingleTodoComponent,canActivate:[AuthGuard]},
  {path:'add-todo',component:AddTodoComponent,canActivate:[AuthGuard]},
  {path:'user',component:UsersComponent,
  children:[
    {path:'registration',component:AddUsersComponent},
    {path:'login',component:LoginComponent},
    {path:'profile',component:ProfileComponent},
  ]
},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {

  
 }
