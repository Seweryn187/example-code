import { MoviesApiService } from './../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetails } from '../../models/movies.models';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  private $movieDetailsSubject: BehaviorSubject<IMovieDetails> = new BehaviorSubject<IMovieDetails>({} as IMovieDetails);
  public $movieDetails: Observable<IMovieDetails> = this.$movieDetailsSubject.asObservable();

  constructor(private route: ActivatedRoute, private moviesApiService: MoviesApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.$movieDetails = this.moviesApiService.getMovieDetails(params['id']);
    });
  }
}
