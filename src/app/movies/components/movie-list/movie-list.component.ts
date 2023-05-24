import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { BehaviorSubject, Observable, Subject, debounceTime, distinctUntilChanged, switchMap, takeUntil, tap } from 'rxjs';
import { IMovie, IMovieList, MovieTypes } from '../../models/movies.models';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { MoviesApiService } from '../../services/movies-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  private $moviesListSubject: BehaviorSubject<IMovieList> = new BehaviorSubject<IMovieList>({} as IMovieList);
  private $destroy: Subject<boolean> = new Subject<boolean>();

  public $moviesList: Observable<IMovieList> = this.$moviesListSubject.asObservable();
  public form!: FormGroup;
  public types = MovieTypes;
  public isMobile!: boolean;

  get formGroup() {
    return this.form;
  }

  get searchFilter() {
    return this.form.get('searchFilter') as FormControl;
  }

  get yearFilter() {
    return this.form.get('yearFilter') as FormControl;
  }

  get typeFilter() {
    return this.form.get('typeFilter') as FormControl;
  }

  constructor(public breakpointObserver: BreakpointObserver, public moviesService: MoviesService, private fb: FormBuilder, private moviesApiService: MoviesApiService){}

  public ngOnInit(): void {
    this.prepareForm();
    this.handleFormChanges();
    this.observeIfMobile();
  }

  public prepareForm(): void {
    this.form = this.fb.group({
      searchFilter: new FormControl(''),
      yearFilter: new FormControl(''),
      typeFilter: new FormControl('')
    });
  }

  public observeIfMobile(): void {
    this.breakpointObserver
      .observe('(max-width: 450px)')
      .pipe(takeUntil(this.$destroy))
      .subscribe( ({matches}) => {
          this.isMobile = matches;
      });
  }

  public handleFormChanges(): void {
    this.formGroup.valueChanges.pipe(
      takeUntil(this.$destroy),
      debounceTime(1000),
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
      tap( (_) => this.moviesService.resetPage()),
      switchMap( ({ searchFilter, yearFilter, typeFilter}) => {
        return this.moviesApiService.getMovies(searchFilter, yearFilter, typeFilter);
      })
    ).subscribe( (data) => {
      this.$moviesListSubject.next(data);
    });
  }

  public handlePageChange(event: number) {
    this.moviesService.setPage(event);
    this.moviesApiService.getMovies(this.searchFilter.value, this.yearFilter.value, this.typeFilter.value).pipe(
      takeUntil(this.$destroy),
    ).subscribe( (data) => {
      this.$moviesListSubject.next(data);
    });
  }

  public ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.complete();
  }

}
