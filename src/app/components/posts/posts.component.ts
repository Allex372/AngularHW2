import {Component, OnInit} from '@angular/core';
import {PostService} from "../../servisec/post.service";
import {Post} from "../../../module/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  posts: Post[];

  singlePost: Post;
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value)
  }

  getBubble(post: Post) {
    this.singlePost = post;
  }

}
