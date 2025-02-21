export interface Post {
    id: number;
    title: string;
    type: 'movie' | 'tvshow';
    cast: string[];
    rating: string;
    imageUrl: string;
    description: string;
  }
