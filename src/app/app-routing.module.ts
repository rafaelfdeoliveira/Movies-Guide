import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'main-movies',
    loadComponent: () => import('./pages/main-movies/main-movies.page').then(m => m.MainMoviesPage)
  },
  {
    path: 'movie-details/:movieId',
    loadComponent: () => import('./pages/movie-details/movie-details.page').then(m => m.MovieDetailsPage)
  },
  {
    path: 'watchlist',
    loadComponent: () => import('./pages/watchlist/watchlist.page').then(m => m.WatchlistPage)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'main-movies'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
