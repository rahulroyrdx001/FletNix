import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  http = inject(HttpClient);
  searchControl = new FormControl('');
  searchType: 'title' | 'cast' = 'title'; // Default search type
  results: any[] = [];
  loading = false;
  errorMessage = '';

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => {
        if (!value?.trim()) {
          this.results = []; // Clear results if input is empty
          return of([]); // Return an observable of an empty array
        }
        return this.searchShows(value.trim());
      }),
      catchError(error => {
        this.errorMessage = 'Error fetching data';
        this.loading = false;
        console.error('Error:', error);
        return of([]); // Ensure it returns an observable
      })
    ).subscribe({
      next: (data) => {
        this.results = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  searchShows(query: string) {
    this.loading = true;
    const endpoint = this.searchType === 'title'
      ? `https://db-test-sigma.vercel.app/api/shows?title=${encodeURIComponent(query)}`
      : `https://db-test-sigma.vercel.app/api/shows?cast=${encodeURIComponent(query)}`;

    return this.http.get<any[]>(endpoint);
  }

  setSearchType(event: Event) {
    const value = (event.target as HTMLSelectElement).value as 'title' | 'cast';
    this.searchType = value;
    this.results = []; // Clear previous results
  }
  
}



