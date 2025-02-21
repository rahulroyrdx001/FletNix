// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Post } from '../../models/post.model';
// import { PostService } from '../../services/post.service';

// @Component({
//   selector: 'app-post-card',
//   templateUrl: './post-card.component.html',
//   styleUrls: ['./post-card.component.css'],
//   standalone: true,
//   imports: [CommonModule] // Remove HttpClientModule from here
// })
// export class PostCardComponent implements OnInit {
//   posts: Post[] = [];
//   loading: boolean = true;
//   error: string = '';

//   constructor(private postService: PostService) { }

//   ngOnInit(): void {
//     this.fetchPosts();
//   }

//   fetchPosts(): void {
//     console.log('Fetching posts...'); // Add this for debugging
//     this.postService.getPosts()
//       .subscribe({
//         next: (data) => {
//           console.log('Received data:', data); // Add this for debugging
//           this.posts = data;
//           this.loading = false;
//         },
//         error: (error) => {
//           this.error = 'Error fetching posts';
//           this.loading = false;
//           console.error('Error:', error);
//         }
//       });
//   }
// }


// import { Component, OnInit, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Post } from '../../models/post.model';
// import { PostService } from '../../services/post.service';

// @Component({
//   selector: 'app-post-card',
//   templateUrl: './post-card.component.html',
//   styleUrls: ['./post-card.component.css'],
//   standalone: true,
//   imports: [CommonModule]
// })
// export class PostCardComponent implements OnInit {
//   posts: Post[] = [];
//   loading = true;
//   error = '';
//   currentPage = 1;
//   itemsPerPage = 15;
//   totalPosts = 0;

//   constructor(private postService: PostService) {}

//   ngOnInit(): void {
//     this.fetchPosts();
//   }

//   fetchPosts(): void {
//     this.loading = true;
//     this.postService.getPosts(this.currentPage, this.itemsPerPage).subscribe({
//       next: (response) => {
//         this.posts = response.posts;
//         this.totalPosts = response.total;
//         this.loading = false;
//       },
//       error: (error) => {
//         this.error = 'Error fetching posts';
//         this.loading = false;
//         console.error('Error:', error);
//       }
//     });
//   }

//   onPageChange(page: number): void {
//     if (page >= 1 && page <= Math.ceil(this.totalPosts / this.itemsPerPage)) {
//       this.currentPage = page;
//       this.fetchPosts();
//     }
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Post } from '../../models/post.model';
// import { PostService } from '../../services/post.service';

// @Component({
//   selector: 'app-post-card',
//   templateUrl: './post-card.component.html',
//   styleUrls: ['./post-card.component.css'],
//   standalone: true,
//   imports: [CommonModule]
// })
// export class PostCardComponent implements OnInit {
//   posts: Post[] = [];
//   loading = true;
//   error = '';
//   currentPage = 1;
//   itemsPerPage = 15;
//   totalPosts = 0;
//   Math = Math; // ✅ Exposing Math so it can be used in the template

//   constructor(private postService: PostService) {}

//   ngOnInit(): void {
//     this.fetchPosts();
//   }

//   fetchPosts(): void {
//     this.loading = true;
//     this.postService.getPosts(this.currentPage, this.itemsPerPage).subscribe({
//       next: (response) => {
//         this.posts = response.posts;
//         this.totalPosts = response.total;
//         this.loading = false;
//       },
//       error: (error) => {
//         this.error = 'Error fetching posts';
//         this.loading = false;
//         console.error('Error:', error);
//       }
//     });
//   }

//   onPageChange(page: number): void {
//     if (page >= 1 && page <= Math.ceil(this.totalPosts / this.itemsPerPage)) {
//       this.currentPage = page;
//       this.fetchPosts();
//     }
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { PostService } from '../../services/post.service';

// @Component({
//   selector: 'app-post-card',
//   templateUrl: './post-card.component.html',
//   styleUrls: ['./post-card.component.css'],
//   standalone: true,
//   imports: [CommonModule]
// })
// export class PostCardComponent implements OnInit {
//   allPosts: any[] = []; // Store all posts from API
//   posts: any[] = []; // Store posts for current page
//   loading = true;
//   error = '';
//   currentPage = 1;
//   itemsPerPage = 15;
//   totalPosts = 0;

//   constructor(private postService: PostService) {}

//   ngOnInit(): void {
//     this.fetchAllPosts();
//   }

//   fetchAllPosts(): void {
//     this.loading = true;
//     this.postService.getAllPosts().subscribe({
//       next: (data) => {
//         console.log('Fetched data:', data); // ✅ Debugging
//         this.allPosts = data;
//         this.totalPosts = this.allPosts.length;
//         this.updatePage();
//         this.loading = false;
//       },
//       error: (error) => {
//         this.error = 'Error fetching posts';
//         this.loading = false;
//         console.error('Error:', error);
//       }
//     });
//   }

//   updatePage(): void {
//     const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//     const endIndex = startIndex + this.itemsPerPage;
//     this.posts = this.allPosts.slice(startIndex, endIndex);
//   }

//   onPageChange(page: number): void {
//     if (page >= 1 && page <= Math.ceil(this.totalPosts / this.itemsPerPage)) {
//       this.currentPage = page;
//       this.updatePage();
//     }
//   }
//   get totalPages(): number {
//     return Math.ceil(this.totalPosts / this.itemsPerPage);
//   }
// }

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PostCardComponent implements OnInit {
  allPosts: any[] = [];
  posts: any[] = [];
  loading = true;
  error = '';
  currentPage = 1;
  itemsPerPage = 15;
  totalPosts = 0;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.fetchAllPosts();
  }

  fetchAllPosts(): void {
    this.loading = true;
    this.postService.getAllPosts().subscribe({
      next: (data) => {
        this.allPosts = data;
        this.totalPosts = this.allPosts.length;
        this.updatePage();
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error fetching posts';
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }

  updatePage(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.posts = this.allPosts.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePage();
    }
  }

  // ✅ Getter for total pages
  get totalPages(): number {
    return Math.ceil(this.totalPosts / this.itemsPerPage);
  }

  // ✅ New method to update posts when search results are received
  updateSearchResults(searchResults: any[]): void {
    this.allPosts = searchResults;
    this.totalPosts = this.allPosts.length;
    this.currentPage = 1;
    this.updatePage();
  }
}
