import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastViewedMoviesComponent } from './last-viewed-movies.component';

describe('LastViewedMoviesComponent', () => {
  let component: LastViewedMoviesComponent;
  let fixture: ComponentFixture<LastViewedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastViewedMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastViewedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
