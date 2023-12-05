import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router
  ) {}

  public goToMovieDetailsPage(movieId: number) {
    this.router.navigate(['movie-details', movieId]);
  }

  public goToWatchlistPage() {
    this.router.navigate(['watchlist']);
  }

  public goToMainMoviesPage() {
    this.router.navigate(['main-movies']);
  }
}
