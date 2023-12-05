import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WatchlistPage } from './watchlist.page';

describe('WatchlistComponent', () => {
  let component: WatchlistPage;
  let fixture: ComponentFixture<WatchlistPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WatchlistPage]
    });
    fixture = TestBed.createComponent(WatchlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
