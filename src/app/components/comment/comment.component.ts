import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment:Component;

  @Output()
  bubbleUp = new EventEmitter<Comment>();


  constructor() { }

  ngOnInit(): void {
  }

  getCommentinfo(comment:Comment){
    this.bubbleUp.emit(comment)
  }
}
