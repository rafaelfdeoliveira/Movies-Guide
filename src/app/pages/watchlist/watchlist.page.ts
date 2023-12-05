import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { HeaderComponent } from '../../components/header/header.component';
import { MoviesTableComponent } from '../../components/movies-table/movies-table.component';
import { MoviesListData } from '../../models/movies-list-data.model';
import { Movie } from '../../models/movie.model';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  standalone: true,
  imports: [CommonModule, MatCardModule, HeaderComponent, MoviesTableComponent]
})
export class WatchlistPage implements OnInit, OnDestroy {

  public watchlistMoviesData: MatTableDataSource<Movie>;

  private subscriptions = new Subscription();

  constructor(
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.watchWatchlistMoviesDataChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private watchWatchlistMoviesDataChanges() {
    this.subscriptions.add(
      this.storage.watchlistCache$.subscribe(() => {
        this.watchlistMoviesData = new MatTableDataSource(MoviesListData.filter(movie => this.storage.isOnWatchlist(movie.id)));
      })
    )
  }
}
