import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistToggleButtonComponent } from './watchlist-toggle-button.component';

describe('WatchlistToggleButtonComponent', () => {
  let component: WatchlistToggleButtonComponent;
  let fixture: ComponentFixture<WatchlistToggleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WatchlistToggleButtonComponent]
    });
    fixture = TestBed.createComponent(WatchlistToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
