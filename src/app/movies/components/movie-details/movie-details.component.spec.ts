import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { LastViewedMoviesComponent } from '../last-viewed-movies/last-viewed-movies.component';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent , LastViewedMoviesComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, NzNotificationModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
