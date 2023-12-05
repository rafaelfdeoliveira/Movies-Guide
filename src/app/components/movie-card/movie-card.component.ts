import { Component, Input, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Movie } from '../../models/movie.model';
import { DurationPipe } from '../../pipes/duration.pipe';
import { WatchlistToggleButtonComponent } from '../watchlist-toggle-button/watchlist-toggle-button.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    YouTubePlayerModule,
    DurationPipe,
    WatchlistToggleButtonComponent
  ]
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;

  public youtubeVideoWidth: number;
  public youtubeVideoHeight: number;

  private readonly defaultYoutubeVideoAspectRatio = 640 / 390;
  private readonly maxMovieCardWidth = 1500;
  private readonly maxYoutubeVideoWidth = 750;

  ngOnInit(): void {
    this.resizeYoutubeVideo(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.resizeYoutubeVideo(window.innerWidth);
  }

  private resizeYoutubeVideo(screenWidth: number) {
    this.youtubeVideoWidth = screenWidth > this.maxMovieCardWidth ? this.maxYoutubeVideoWidth : screenWidth / 2;
    this.youtubeVideoHeight = this.youtubeVideoWidth / this.defaultYoutubeVideoAspectRatio;
  }
}
