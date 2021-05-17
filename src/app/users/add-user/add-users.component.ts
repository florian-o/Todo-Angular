import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  userform:FormGroup;

  constructor(private formbuilder:FormBuilder,private userService:UsersService,private router:Router) { }

  ngOnInit(): void {
    this.initUseForm()
  }
  initUseForm():void{
    this.userform = this.formbuilder.group({
    firstname:this.formbuilder.control("",[Validators.required,Validators.minLength(5)]),
    lastname:this.formbuilder.control("",[Validators.required,Validators.minLength(5)]),
    email:this.formbuilder.control("",[Validators.required,Validators.email]),
    datebirth:this.formbuilder.control("",Validators.required),
    address:this.formbuilder.group({
      street:this.formbuilder.control("",Validators.required),
      state:this.formbuilder.control("",Validators.required),
      city:this.formbuilder.control("",Validators.required),
      zip:this.formbuilder.control("",Validators.required)
    })    
    });
    
  }
  onSubmit():void{
    //console.log(this.userform.value);
    const dataUser = this.userform.value;
    const address = new Address(dataUser.street,dataUser.city,dataUser.state,dataUser.zip);
    this.userform.value["datebirth"] = new Date(this.userform.value["datebirth"]);
    const newUser = new User(
    dataUser.firstname,
    dataUser.lastname,
    dataUser.email,
    dataUser.datebirth,
    address
   );    
   this.userService.addUser(newUser);
   this.router.navigate(["/users"])
  }
}
