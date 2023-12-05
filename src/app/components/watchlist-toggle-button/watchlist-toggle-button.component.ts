import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StorageService } from '../../services/storage.service';
import { WatchlistButtonComponent } from '../watchlist-button/watchlist-button.component';

@Component({
  selector: 'app-watchlist-toggle-button',
  templateUrl: './watchlist-toggle-button.component.html',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, WatchlistButtonComponent]
})
export class WatchlistToggleButtonComponent {
  @Input() movieId: number;

  constructor(
    public storage: StorageService
  ) {}
}
