import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../servisec/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {


   comments:Comment[];

   singleComment: Comment;
  constructor(private commentService : CommentService) { }

  ngOnInit(): void {
    this.commentService.getCommets().subscribe(value => this.comments = value)
  }

  getBubble(comment:Comment){
    this.singleComment = comment
  }

}
