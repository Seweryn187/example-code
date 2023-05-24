import { MoviesService } from './movies.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment';
import { Observable, map, tap } from 'rxjs';
import { IMovie, IMovieDetails, IMovieDetailsExternal, IMovieList, IMovieListExternal, MovieTypes } from '../models/movies.models';
import { mapMovieDetails, mapMovieList } from '../helpers/movie-mappers';
import { ErrorNotifitacionService } from './error-notifitacion.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  private API_KEY: string = `${environment.apiUrl}`;

  private BASE_API_URL: string = `http://www.omdbapi.com/?apikey=${this.API_KEY}&`;

  private SEARCH_API_URL: string = this.BASE_API_URL + 's=';

  private MOVIE_DETAILS_API_URL: string = this.BASE_API_URL + 'i=';

  constructor(private http: HttpClient, private errorNotifitacionService: ErrorNotifitacionService, private moviesService: MoviesService) { }

  public getMovies(searchString: string, year?: string, type?: MovieTypes): Observable<IMovieList>{
    return this.http.get<IMovieListExternal>(this.prepareUrl(searchString, year, type)).pipe(
      tap( (res) => {
        if(res.Response === 'False') {
          this.errorNotifitacionService.createErrorNotyfication(res.Error);
        }
      }),
      map( res => mapMovieList(res)));
  }

  public getMovieDetails(movieId: string): Observable<IMovieDetails>{
    return this.http.get<IMovieDetailsExternal>(`${this.MOVIE_DETAILS_API_URL}${movieId}`).pipe((map( res => mapMovieDetails(res))));
  }

  public prepareUrl(searchString: string, year?: string, type?: MovieTypes): string {
    return `${this.SEARCH_API_URL}${searchString}&y=${year}&type=${type}&page=${this.moviesService.getPage()}`;
  }
}
