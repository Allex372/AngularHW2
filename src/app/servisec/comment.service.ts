import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient:HttpClient) {
  }

  getCommets(): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(this.url)
  }

  getCommentById(id): Observable<Comment>{
    return this.httpClient.get<Comment>(this.url+'/'+id)
  }
}

