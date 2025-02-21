import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './components/post-card/post-card.component';
import {SearchFilterComponent} from './components/search-filter/search-filter.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PostCardComponent,SearchFilterComponent],
  template: `
    <main class="container">
      <app-search-filter></app-search-filter>
      <app-post-card></app-post-card>
    </main>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
  `]
})
export class AppComponent {}