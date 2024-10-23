import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../register.service';



export interface Login {
  email:string;
  password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
loginForm!:FormGroup
  constructor(private _loginService:LoginService,
    private router:Router,
    private registerService:RegisterService,
  ){
    this.loginForm =new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
  ngOnInit(): void {
  }
  login(){
    if(this.loginForm.valid){
      this._loginService.userRegistered(this.loginForm.value.email).subscribe(isRegistered=>{
      
        if(isRegistered)
          {
            this._loginService.getLoginServices(this.loginForm.value).subscribe(
              (data:any)=>{
                localStorage.setItem('email',data.email)
                alert('login success')
                this.router.navigateByUrl('/dashboard');
              }
            ) 
          }
          else{
            alert('User Is Not Registered?')
            this.router.navigateByUrl('/register')
          }
      })
    }
    else{
      alert('Please fill out all required fields correctly.'); 
      this.loginForm.markAllAsTouched()
    }
  }
 
}
