import { Injectable } from '@angular/core';
import { IMovie } from '../models/movies.models';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private page: number = 1;

  private lastViewdMovies: IMovie[] = [];

  constructor() { }

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
    if(this.lastViewdMovies.some(( {imdbID}) => imdbID === movie.imdbID)) {
      return;
    }
    this.lastViewdMovies = [...this.lastViewdMovies, movie];
  }


}
