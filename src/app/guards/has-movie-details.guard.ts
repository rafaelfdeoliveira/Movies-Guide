import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, UrlTree } from "@angular/router";
import { MoviesListData } from "../models/movies-list-data.model";

@Injectable({
  providedIn: 'root'
})
export class HasMovieDetailsGuard {

  constructor(
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const movieIdText = route.paramMap.get('movieId');
    if (!movieIdText) {
      return this.router.createUrlTree(['main-movies']);
    }

    const movieId = parseInt(movieIdText);
    const movie = MoviesListData.find((movie) => movie.id === movieId);

    if (!movie) {
      return this.router.createUrlTree(['main-movies']);
    }

    route.data = {...route.data, movie};
    return true;
  }

}
