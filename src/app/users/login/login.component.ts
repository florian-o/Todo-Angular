import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel= {
    Email:'',
    Password:'',
  }

  userformLogin:FormGroup;
  user:Subscription;
  users:User[];
  constructor(private userService:UsersService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {    
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    this.userService.login(form.value).subscribe(
      (res:any)=>{       
       this.router.navigateByUrl('/todos');
      },
      (err)=> {
        if (err.status == 400)
          this.toastr.error('Authentification echouer','login ou mot de passe incorrect');
        else
          console.log(err);
          

      }
    )

    
  }

}
