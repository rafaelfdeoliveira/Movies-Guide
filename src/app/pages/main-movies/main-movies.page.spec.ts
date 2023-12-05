import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMoviesPage } from './main-movies.page';

describe('MainMoviesComponent', () => {
  let component: MainMoviesPage;
  let fixture: ComponentFixture<MainMoviesPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMoviesPage]
    });
    fixture = TestBed.createComponent(MainMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
