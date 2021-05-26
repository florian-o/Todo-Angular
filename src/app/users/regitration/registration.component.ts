import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class AddUsersComponent implements OnInit {
 
  userform:FormGroup;
  errorPassword:string;
  constructor(public userService:UsersService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.initUseForm()
  }
  initUseForm():void{
    
  }
  
  onSubmit():void{

    this.userService.Register().subscribe(
      (res:any)=> {
        if(res.succeeded){
          this.userService.formModel.reset();
          this.toastr.success('Utilisateur créer!')
        }else{
          res.errors.forEach(element => {
            switch (element.code) {
               // utilisateur existant
              case 'DuplicateUserName':
                this.toastr.error("l'utilisateur existe deja","Enregistrement echoué.")               
                break;            
              default:
                // enregistrement echoué
                this.toastr.error(element.description,"Enregistrement echoué.")
                break;
            }
            console.log(element);
            
          });
        }
      },
      err => {
        console.log(err);
        
      }
    )
    
    //const dataUser = this.userform.value;
  
    
  // this.userService.addUser(newUser);
   //this.router.navigate(["/users"])
  }
}
