import { MoviesApiService } from './../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetails } from '../../models/movies.models';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy{

  private $movieDetailsSubject: BehaviorSubject<IMovieDetails> = new BehaviorSubject<IMovieDetails>({} as IMovieDetails);
  private $destroy: Subject<boolean> = new Subject<boolean>();
  public $movieDetails: Observable<IMovieDetails> = this.$movieDetailsSubject.asObservable();

  constructor(private route: ActivatedRoute, private moviesApiService: MoviesApiService) { }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.$destroy)).subscribe(params => {
      this.$movieDetails = this.moviesApiService.getMovieDetails(params['id']);
    });
  }

  public ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.complete();
  }
}
