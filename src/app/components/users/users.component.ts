import { Component, OnInit } from '@angular/core';
import {User} from "../../../module/User";
import {UserService} from "../../servisec/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: User[];

  singleUser: User;
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users=value);
  }

  getBubble(user:User){
    console.log(user);
    this.singleUser = user;
  }
}
