import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models';
import { POSTS_URL_TOKEN } from './tokens/url.token';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    @Inject(POSTS_URL_TOKEN) private url: string,
    private http: HttpClient
  ) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/static-data.json`);
  }
}
