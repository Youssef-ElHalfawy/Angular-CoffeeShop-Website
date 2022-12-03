import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public router:Router) {}
  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])
  })

  get myEmail(){
    return this.loginForm.controls['email'];
  }

  get myPassword(){
    return this.loginForm.controls['password'];
  }

  emailHasError(errorMsg:any){
    if (this.myEmail.errors) {
      return Object.keys(this.myEmail.errors).includes(errorMsg);
    }
    return false;
  }

  passwordHasError(errorMsg:any){
    if (this.myPassword.errors) {
      return Object.keys(this.myPassword.errors).includes(errorMsg);
    }
    return false;
  }

  onSubmit(){
    if (this.myEmail.status=='VALID') {
      this.router.navigate(['/slider'])
    }
    // console.log(this.loginForm);
  }
}