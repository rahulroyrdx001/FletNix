// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Post } from '../models/post.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
//   // private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
//   private apiUrl = 'https://db-test-sigma.vercel.app/api/shows';

//   constructor(private http: HttpClient) { }

//   getPosts(): Observable<Post[]> {
//     return this.http.get<Post[]>(this.apiUrl);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Post } from '../models/post.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
//   private apiUrl = 'https://db-test-sigma.vercel.app/api/shows';

//   constructor(private http: HttpClient) {}

//   getPosts(page: number = 1, limit: number = 15): Observable<{ posts: Post[], total: number }> {
//     return this.http.get<{ posts: Post[], total: number }>(`${this.apiUrl}?_page=${page}&_limit=${limit}`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://db-test-sigma.vercel.app/api/shows';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

