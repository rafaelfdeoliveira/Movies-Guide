import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Movie } from '../../../../models/movie.model';
import { StorageService } from '../../../../services/storage.service';
import { WatchlistButtonComponent } from '../../../../components/watchlist-button/watchlist-button.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, WatchlistButtonComponent, YouTubePlayerModule]
})
export class MovieCardComponent {
  @Input() movie: Movie;

  constructor(
    public storage: StorageService
  ) {}
}
