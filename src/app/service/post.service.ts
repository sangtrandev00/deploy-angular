import { Injectable } from '@angular/core';
import { IPost } from '../types/Post';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postsUrl = 'http://localhost:3000/posts'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient // private messageService: MessageService
  ) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postsUrl);
  }

  getPostById(id: string): Observable<IPost> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<IPost>(url);
  }

  onCreatePost(dataPost: Omit<IPost, 'id'>) {
    return this.http.post(this.postsUrl, dataPost);
  }

  onDelete(id: number): Observable<Object> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete(url);
  }

  onUpdate(post: IPost): Observable<any> {
    return this.http.put(`${this.postsUrl}/${post.id}`, post, this.httpOptions);
    // .pipe(
    //   tap(_ => this.log(`updated hero id=${hero.id}`)),
    //   catchError(this.handleError<any>('updateHero'))
    // );
  }
}
