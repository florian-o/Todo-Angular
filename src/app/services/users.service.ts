import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})



export class UsersService {
  readonly BaseUrl= "https://localhost:44322/api"
  users;
  userSubject = new Subject<User[]>();
  err:string;
  constructor(private http:HttpClient,private forModel:FormBuilder) { }




formModel = this.forModel.group({
  firstname:['',Validators.required],
  lastname:['',Validators.required],
  email:['',[Validators.required,Validators.email]],
  Passwords:this.forModel.group({
    password:['',[Validators.required,Validators.minLength(6)]],
    ConfirmPassword:['',Validators.required]
  },{validators:this.comparePasswords})
});

comparePasswords(form:FormGroup){
  let confirmPass = form.get('ConfirmPassword');  
  //passwordMissmatch
  if(confirmPass.errors == null || 'passwordMissmatch' in confirmPass.errors){
    if(form.get('password').value != confirmPass.value)
      confirmPass.setErrors({passwordMissmatch:true})
    else
      confirmPass.setErrors(null)
  }
}

emitUser():void{  
  this.userSubject.next(this.users);  
}
  Register(){    
    var body = {
      firstname:this.formModel.value.firstname,
      lastname:this.formModel.value.lastname,
      email:this.formModel.value.email,
      password:this.formModel.get('Passwords.password').value,
    }
    return this.http.post(this.BaseUrl+"/User/Register",body)    
}

login(form){
  return this.http.post(this.BaseUrl+"/User/Login",form).pipe(
    map(user => { console.log(user)
    localStorage.setItem('token',user['token']);
    this.users= user;
    this.emitUser();    
    })
  )
}


}
