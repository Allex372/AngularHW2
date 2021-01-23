import {Component, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../../module/Post";
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post:Post;

  @Output()
  bubbleUp = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  getPostInfo(post: Post){
    console.log(post)
    this.bubbleUp.emit(post)
  }


}
