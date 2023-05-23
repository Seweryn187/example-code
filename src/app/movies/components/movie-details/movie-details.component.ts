import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetails } from '../../models/movies.models';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  private $movieDetailsSubject: BehaviorSubject<IMovieDetails> = new BehaviorSubject<IMovieDetails>({} as IMovieDetails);
  public $movieDetails: Observable<IMovieDetails> = this.$movieDetailsSubject.asObservable();

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.$movieDetails = this.moviesService.getMovieDetails(params['id']);
    });
  }
}
