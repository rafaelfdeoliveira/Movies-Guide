import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { NavigationService } from '../../services/navigation.service';
import { Movie } from '../../models/movie.model';
import { MoviesListData } from 'src/app/models/movies-list-data.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MovieCardComponent]
})
export class MovieDetailsPage implements OnInit {

  public movie: Movie;

  constructor(
    public navigation: NavigationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const movieIdText = this.route.snapshot.paramMap.get('movieId');
    if (!movieIdText) {
      return;
    }

    const movieId = parseInt(movieIdText);
    const movie = MoviesListData.find((movie) => movie.id === movieId);
    if (movie) {
      this.movie = movie;
    }
  }
}
