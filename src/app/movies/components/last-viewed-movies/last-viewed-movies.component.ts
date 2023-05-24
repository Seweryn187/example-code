import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-last-viewed-movies',
  templateUrl: './last-viewed-movies.component.html',
  styleUrls: ['./last-viewed-movies.component.scss']
})
export class LastViewedMoviesComponent {
  constructor(public moviesService: MoviesService) {}
}
