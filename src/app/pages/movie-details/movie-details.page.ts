import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MovieCardComponent]
})
export class MovieDetailsPage implements OnInit {

  public movie: Movie;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movie = this.route.snapshot.data['movie'];
  }
}
