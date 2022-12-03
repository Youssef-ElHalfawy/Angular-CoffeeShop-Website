import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})

export class UserformComponent implements OnInit {

  userId: string;
  constructor(
    public userService: UserService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.userId = this.activatedRoute.snapshot.params['id'];
  }
  newUser = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z\s]{3,}$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  ngOnInit(): void {}
  get getName() {
    return this.newUser.controls['name'];
  }

  usernameHasError(errorMsg: any) {
    if (this.getName.errors) {
      return Object.keys(this.getName.errors).includes(errorMsg);
    } else {
      return false;
    }
  }
  get getEmail() {
    return this.newUser.controls['email'];
  }

  emailHasError(errorMsg: any) {
    if (this.getEmail.errors) {
      return Object.keys(this.getEmail.errors).includes(errorMsg);
    } else {
      return false;
    }
  }

  onSubmit() {
    if (this.newUser.status === 'VALID') {
      if (!this.userId) {
        this.userService.addUser(this.newUser.value).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        this.userService.editUser(this.userId, this.newUser.value).subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
      }

      this.router.navigate(['/users']);
    }
  }
}
