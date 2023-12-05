import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigationService } from '../../services/navigation.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule]
})
export class HeaderComponent {
  @Input() showMainMoviesPageBtn: boolean;
  @Input() showWatchlistPageBtn: boolean;
  @Input() showWatchlistClearBtn: boolean;
  @Input() title: string;

  constructor(
    public navigation: NavigationService,
    public storage: StorageService
  ) {}
}
