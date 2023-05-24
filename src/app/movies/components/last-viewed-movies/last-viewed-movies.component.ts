import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IMovie } from '../../models/movies.models';

@Component({
  selector: 'app-last-viewed-movies',
  templateUrl: './last-viewed-movies.component.html',
  styleUrls: ['./last-viewed-movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastViewedMoviesComponent {
  constructor(public moviesService: MoviesService) {}

  trackByImdbId(index: number, movie: IMovie): string {
    return movie.imdbID;
  }
}
