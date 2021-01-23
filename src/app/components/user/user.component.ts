import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../module/User";
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  bubbleUp = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getUserInfo(user: User) {
    console.log(user)
    this.bubbleUp.emit(user)
  }
}
