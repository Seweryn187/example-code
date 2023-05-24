import { TestBed } from '@angular/core/testing';

import { MoviesApiService } from './movies-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { environment } from 'src/enviroments/environment';
import { IMovieDetails, IMovieDetailsExternal, IMovieList, IMovieListExternal, MovieTypes } from '../models/movies.models';
import { MoviesService } from './movies.service';

describe('MoviesApiService', () => {
  let moviesApiService: MoviesApiService;
  let httpTestingController: HttpTestingController;
  let moviesService: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NzNotificationModule
      ]
    });
    moviesApiService = TestBed.inject(MoviesApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
    moviesService = TestBed.inject(MoviesService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(moviesService).toBeTruthy();
  });

  it('should retrieve movie list', () => {
    const mockResponse: IMovieListExternal = {
      Response: 'True',
      Search: [
        {
          Poster: 'test',
          Title: 'test',
          Type: 'test',
          Year: 2000,
          imdbID: 'test'
        },
      ],
      totalResults: 10
     };

     const mockResponseAfterMapping: IMovieList = {
      response: true,
      search: [
        {
          poster: 'test',
          title: 'test',
          type: 'test',
          year: 2000,
          imdbID: 'test'
        },
      ],
      totalResults: 10
     };
    const searchString = 'Batman';

    moviesApiService.getMovies(searchString).subscribe((response) => {
      expect(response).toEqual(mockResponseAfterMapping);
    });

    const req = httpTestingController.expectOne(`http://www.omdbapi.com/?apikey=${environment.apiUrl}&s=${searchString}&y=undefined&type=undefined&page=1`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should retrieve movie details', () => {
    const mockResponse: IMovieDetailsExternal = {
      Title: "Sample Movie",
      Year: 2022,
      Rated: "PG-13",
      Released: new Date("2022-01-01"),
      Runtime: "120 min",
      Genre: "Action",
      Director: "John Director",
      Writer: "Jane Writer",
      Actors: "Actor A, Actor B",
      Plot: "This is a sample movie plot.",
      Language: "English",
      Country: "United States",
      Awards: "Best Movie Award",
      Poster: "http://example.com/sample-poster.jpg",
      Ratings: [
        { Source: "IMDb", Value: "7.5/10" },
        { Source: "Rotten Tomatoes", Value: "85%" },
      ],
      Metascore: 80,
      imdbRating: 7.8,
      imdbVotes: 1000,
      imdbID: "tt1234567",
      Type: "movie",
      DVD: new Date("2022-05-01"),
      BoxOffice: "$10 million",
      Production: "Sample Production",
      Website: "http://example.com",
    };

    const mockResponseAfterMapping: IMovieDetails = {
      title: "Sample Movie",
      year: 2022,
      rated: "PG-13",
      released: new Date("2022-01-01"),
      runtime: "120 min",
      genre: "Action",
      director: "John Director",
      writer: "Jane Writer",
      actors: "Actor A, Actor B",
      plot: "This is a sample movie plot.",
      language: "English",
      country: "United States",
      awards: "Best Movie Award",
      poster: "http://example.com/sample-poster.jpg",
      ratings: [
        { source: "IMDb", value: "7.5/10" },
        { source: "Rotten Tomatoes", value: "85%" },
      ],
      metascore: 80,
      imdbRating: 7.8,
      imdbVotes: 1000,
      imdbID: "tt1234567",
      type: "movie",
      dvd: new Date("2022-05-01"),
      boxOffice: "$10 million",
      production: "Sample Production",
      website: "http://example.com",
    };
    const movieId = '123';

    moviesApiService.getMovieDetails(movieId).subscribe((response) => {
      expect(response).toEqual(mockResponseAfterMapping);
    });

    const req = httpTestingController.expectOne(`http://www.omdbapi.com/?apikey=${environment.apiUrl}&i=${movieId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should prepare the API URL correctly', () => {
    const searchString = 'Batman';
    const year = '2020';
    const type: MovieTypes = MovieTypes.MOVIE;
    moviesService.setPage(2);

    const result = moviesApiService.prepareUrl(searchString, year, type);
    const expectedUrl = `http://www.omdbapi.com/?apikey=${environment.apiUrl}&s=${searchString}&y=${year}&type=${type}&page=${moviesService.getPage()}`;

    expect(result).toEqual(expectedUrl);
  });
});
