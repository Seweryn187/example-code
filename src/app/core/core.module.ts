import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { MoviesModule } from '../movies/movies.module';
import { NzResultModule } from 'ng-zorro-antd/result';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    RouterModule,
    MoviesModule,
    NzResultModule
  ]
})
export class CoreModule { }
