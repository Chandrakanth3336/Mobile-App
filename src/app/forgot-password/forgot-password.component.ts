import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPassword:FormGroup=new FormGroup({
    email:new FormControl(),
    newPassword: new FormControl()
  })
  constructor(private router:Router, private loginService:LoginService ){

  }

  submit() {
    const email = this.forgotPassword.get('email')?.value;  
    const newPassword = this.forgotPassword.get('newPassword')?.value; 
  
    this.loginService.getpasswordByEmail(email).subscribe(
      (user) => {
        console.log('User data fetched:', user);
        if (user) {
          this.loginService.forgotPassword(newPassword, user.id).subscribe(() => {
            alert('Password Updated successfully');
            this.router.navigateByUrl('/login');
          });
        } 
      });
  }
  
}
