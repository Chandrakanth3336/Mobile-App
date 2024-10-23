import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
constructor(private router:Router, private _loginService:LoginService){

}
registerForm:FormGroup=new FormGroup({
  name : new FormControl('',[Validators.required]),
  email : new FormControl('',[Validators.required]),
  password : new FormControl('',[Validators.required])
})

register(){
  if(this.registerForm.valid){
    this._loginService.onRegister(this.registerForm.value).subscribe(
  (data:any)=>{
    alert('Registered Successfully')
    this.router.navigateByUrl('/login');
  }
 )
  }
  else{
    alert('Please fill out all required fields correctly.'); 
    this.registerForm.markAllAsTouched()
  }
 
}
}
