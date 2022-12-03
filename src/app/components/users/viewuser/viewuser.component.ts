import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  userId: string;
  user: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public userService: UserService
  ) {
    this.userId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe((res) => {
      console.log(res);
      this.user = res;
    });
  }
}