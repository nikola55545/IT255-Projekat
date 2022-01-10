import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NewsService } from '../services/news.service';
import { NewsListComponent } from './news-list/news-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { newsReducer } from '../state/news-state/news.reducer';
import { NewsEffects } from '../state/news-state/news.effects';

@NgModule({
  declarations: [HomeComponent, NewsListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    NgxSpinnerModule,
    StoreModule.forFeature('news', newsReducer),
    EffectsModule.forFeature([NewsEffects]),
  ],
  exports: [
    HomeComponent,
    NewsListComponent
  ],
  providers:[
    NewsService
  ]
})
export class PagesModule { }
