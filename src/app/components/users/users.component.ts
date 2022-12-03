import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userServices:UserService) {}

  users:any;
  ngOnInit(): void {
    // this.userServices.getAllUsers().subscribe((res)=>{},(err)=>{},);    <--deprecated
    this.userServices.getAllUsers().forEach(res => this.users = res);
  }

  deleteUser(userId: any) {
    this.userServices.deleteUser(userId).forEach(res => {
        this.users = this.users.filter((user: any) => user.id != userId);
    });
  }
}
