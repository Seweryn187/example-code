import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoviesService', () => {
  let moviesService: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NzNotificationModule, RouterTestingModule]
    });
    moviesService = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(moviesService).toBeTruthy();
  });

  it('it should add new last viewed movie ', () => {
    const mockMovie = {
      poster: 'test',
      title: 'test',
      type: 'test',
      year: 2000,
      imdbID: 'test'
    };

    moviesService.addNewMovie(mockMovie);

    expect(moviesService.getLastViewdMovies().length).toBe(1);
    expect(moviesService.getLastViewdMovies()[0]).toEqual(mockMovie);
  });

  it('it should not add new last viewed movie when it is the same movie', () => {
    const mockMovie = {
      poster: 'test',
      title: 'test',
      type: 'test',
      year: 2000,
      imdbID: 'test'
    };

    moviesService.addNewMovie(mockMovie);
    moviesService.addNewMovie(mockMovie);

    expect(moviesService.getLastViewdMovies().length).toBe(1);
    expect(moviesService.getLastViewdMovies()[0]).toEqual(mockMovie);
  });
});
