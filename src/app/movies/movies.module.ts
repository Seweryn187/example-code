import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesRoutingModule } from './movies-routing.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CheckIfHaveValuePipe } from './pipes/check-if-have-value.pipe';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { LayoutModule } from '@angular/cdk/layout';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { LastViewedMoviesComponent } from './components/last-viewed-movies/last-viewed-movies.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    CheckIfHaveValuePipe,
    MovieCardComponent,
    LastViewedMoviesComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    NzIconModule,
    NzSelectModule,
    NzPaginationModule,
    NzCardModule,
    NzGridModule,
    NzFormModule,
    NzDescriptionsModule,
    NzNotificationModule,
    LayoutModule,
    NzCarouselModule
  ]
})
export class MoviesModule { }
