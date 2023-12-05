import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DurationPipe } from '../../pipes/duration.pipe';
import { StorageService } from '../../services/storage.service';
import { NavigationService } from '../../services/navigation.service';
import { WatchlistButtonComponent } from '../../components/watchlist-button/watchlist-button.component';
import { Movie } from '../../models/movie.model';
import { MoviesListData } from '../../models/movies-list-data.model';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, DurationPipe, WatchlistButtonComponent]
})
export class MoviesTableComponent implements AfterViewInit {

  @Input() moviesListData: MatTableDataSource<Movie> = new MatTableDataSource(MoviesListData);

  @ViewChild(MatSort) sort: MatSort;

  public readonly displayedColumns: string[] = ['title', 'rating', 'durationInMinutes', 'genre', 'releaseDate'];

  constructor(
    public storage: StorageService,
    public navigation: NavigationService
  ) {}

  ngAfterViewInit() {
    this.moviesListData.sort = this.sort;
  }
}
