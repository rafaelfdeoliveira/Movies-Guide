import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsPage } from './movie-details.page';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsPage;
  let fixture: ComponentFixture<MovieDetailsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsPage]
    });
    fixture = TestBed.createComponent(MovieDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
