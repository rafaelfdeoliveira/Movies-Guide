import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private watchlistCache: number[]|null = null;

  private readonly localStorage: Storage = window.localStorage;
  private readonly watchlistKey = 'movies-watchlist';

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
    this.watchlistCache = [];
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
    if (this.watchlistCache !== null) {
      return this.watchlistCache;
    }

    const storedValue = this.localStorage.getItem(this.watchlistKey);
    if (storedValue) {
      const watchlist = JSON.parse(storedValue);
      this.watchlistCache = watchlist;
      return watchlist;
    }

    this.watchlistCache = [];
    return this.watchlistCache;
  }

  private saveWatchlist(watchlist: number[]) {
    this.watchlistCache = watchlist;
    this.localStorage.setItem(this.watchlistKey, JSON.stringify(watchlist));
  }
}
