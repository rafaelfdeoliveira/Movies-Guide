import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _watchlistCache$ = new BehaviorSubject<number[]|null>(null);

  private readonly localStorage: Storage = window.localStorage;
  private readonly watchlistKey = 'movies-watchlist';

  public get watchlistCache$(): Observable<number[]|null> {
    return this._watchlistCache$.asObservable();
  }

  public isOnWatchlist(movieId: number) {
    const watchlist = this.getWatchlist();
    return watchlist.includes(movieId);
  }

  public toggleMovieOnWatchlist(movieId: number) {
    if (this.isOnWatchlist(movieId)) {
      this.removeFromWatchlist(movieId);
      return;
    }

    this.addToWatchlist(movieId);
  }

  public clearWatchlist() {
    this._watchlistCache$.next([]);
    this.localStorage.removeItem(this.watchlistKey);
  }

  private addToWatchlist(movieId: number) {
    const watchlist = this.getWatchlist();
    watchlist.push(movieId);
    this.saveWatchlist(watchlist);
  }

  private removeFromWatchlist(movieId: number) {
    const watchlist = this.getWatchlist().filter((id) => id !== movieId);
    this.saveWatchlist(watchlist);
  }

  private getWatchlist(): number[] {
    const watchlistCache = this._watchlistCache$.getValue()
    if (watchlistCache !== null) {
      return watchlistCache;
    }

    const storedValue = this.localStorage.getItem(this.watchlistKey);
    if (storedValue) {
      const watchlist = JSON.parse(storedValue);
      this._watchlistCache$.next(watchlist);
      return watchlist;
    }

    this._watchlistCache$.next([]);
    return [];
  }

  private saveWatchlist(watchlist: number[]) {
    this._watchlistCache$.next(watchlist);
    this.localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
  }
}
