import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzCardModule } from 'ng-zorro-antd/card';
import { IMovie } from '../../models/movies.models';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardComponent ],
      imports: [HttpClientTestingModule, NzNotificationModule, NzCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.componentInstance.movie = { title: 'test'} as IMovie;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
