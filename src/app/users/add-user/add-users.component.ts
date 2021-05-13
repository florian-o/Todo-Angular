import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  userform:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initUseForm()
  }
  initUseForm():void{
    this.userform = this.formbuilder.group({
    firstname:this.formbuilder.control(""),
    lastname:this.formbuilder.control(""),
    email:this.formbuilder.control(""),
    datebirth:this.formbuilder.control(""),
    address:this.formbuilder.group({
      street:this.formbuilder.control(""),
      state:this.formbuilder.control(""),
      city:this.formbuilder.control(""),
      zip:this.formbuilder.control("")
    })    
    });
    
  }
  onSubmit():void{
      console.log(this.userform.value);
    let date =  this.userform.value["datebirth"];
    let convertDate= new Date(date);
    console.log(convertDate);
    
  }
}
