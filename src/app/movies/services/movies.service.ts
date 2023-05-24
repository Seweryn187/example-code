import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { IMovie, IMovieDetails, IMovieDetailsExternal, IMovieList, IMovieListExternal, MovieTypes } from '../models/movies.models';
import { environment } from 'src/enviroments/environment';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { mapMovieDetails, mapMovieList } from '../helpers/movie-mappers';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_KEY: string = `${environment.apiUrl}`;

  private BASE_API_URL: string = `http://www.omdbapi.com/?apikey=${this.API_KEY}&`;

  private SEARCH_API_URL: string = this.BASE_API_URL + 's=';

  private MOVIE_DETAILS_API_URL: string = this.BASE_API_URL + 'i=';

  private page: number = 1;

  private lastViewdMovies: IMovie[] = [];

  constructor(private http: HttpClient, private notification: NzNotificationService) { }

  public getMovies(searchString: string, year?: string, type?: MovieTypes): Observable<IMovieList>{
    return this.http.get<IMovieListExternal>(this.prepareUrl(searchString, year, type)).pipe(
      tap( (res) => {
        if(res.Response === 'False') {
          this.createErrorNotyfication(res.Error);
        }
      }),
      map( res => mapMovieList(res)));
  }

  public getMovieDetails(movieId: string): Observable<IMovieDetails>{
    return this.http.get<IMovieDetailsExternal>(`${this.MOVIE_DETAILS_API_URL}${movieId}`).pipe((map( res => mapMovieDetails(res))));
  }

  public prepareUrl(searchString: string, year?: string, type?: MovieTypes): string {
    return `${this.SEARCH_API_URL}${searchString}&y=${year}&type=${type}&page=${this.page}`;
  }

  public getPage(): number {
    return this.page;
  }

  public setPage(value: number): void {
    this.page = value;
  }

  public resetPage(): void {
    this.setPage(1);
  }

  public getLastViewdMovies(): IMovie[] {
    return this.lastViewdMovies;
  }

  public addNewMovie(movie: IMovie): void {
    if(this.lastViewdMovies.some(( {imdbId}) => imdbId === movie.imdbId)) {
      return;
    }
    this.lastViewdMovies = [...this.lastViewdMovies, movie];
  }

  public createErrorNotyfication(error: string | undefined): void {
    this.notification.create(
      'error',
      'Error',
      `There was a problem with your search - ${error}. Try again with diffrent parameters`
    );
  }
}
