import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DurationPipe } from '../../pipes/duration.pipe';
import { MoviesListData } from '../../models/movies-list-data.model';
import { StorageService } from '../../services/storage.service';
import { NavigationService } from '../../services/navigation.service';
import { WatchlistButtonComponent } from '../../components/watchlist-button/watchlist-button.component';

@Component({
  selector: 'app-main-movies',
  templateUrl: './main-movies.page.html',
  styleUrls: ['./main-movies.page.scss'],
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatButtonModule, MatIconModule, DurationPipe, WatchlistButtonComponent]
})
export class MainMoviesPage implements AfterViewInit {
  public moviesListData = new MatTableDataSource(MoviesListData);
  public displayedColumns: string[] = ['title', 'rating', 'durationInMinutes', 'genre', 'releasedDate'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public storage: StorageService,
    public navigation: NavigationService
  ) {}

  ngAfterViewInit() {
    this.moviesListData.sort = this.sort;
  }

}
