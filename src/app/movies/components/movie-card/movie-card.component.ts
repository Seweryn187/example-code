import { Component, Input } from '@angular/core';
import { IMovie } from '../../models/movies.models';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() public movie!: IMovie;

  constructor(private router: Router, private moviesService: MoviesService) {}

  public handleClick(movie: IMovie) {
    this.moviesService.addNewMovie(movie);
    this.router.navigate(['/movies', movie.imdbID]);
  }

}
