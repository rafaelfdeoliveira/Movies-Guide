import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MoviesTableComponent } from '../../components/movies-table/movies-table.component';

@Component({
  selector: 'app-main-movies',
  templateUrl: './main-movies.page.html',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MoviesTableComponent]
})
export class MainMoviesPage {

}
