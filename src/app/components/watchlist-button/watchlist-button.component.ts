import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-watchlist-button',
  templateUrl: './watchlist-button.component.html',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule]
})
export class WatchlistButtonComponent {
  @Input() movieId: number;

  constructor(
    public storage: StorageService
  ) {}
}
