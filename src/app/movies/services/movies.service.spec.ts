import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NzNotificationModule, RouterTestingModule]
    });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
