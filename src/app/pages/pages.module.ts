import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NewsapiservicesService } from '../services/newsapiservices.service';
import { NewsListComponent } from './news-list/news-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { newsReducer } from '../state/news-state/news.reducer';
import { NewsEffects } from '../state/news-state/news.effects';

import { BusinessNewsComponent } from './business-news/business-news.component';
import { EntNewsComponent } from './ent-news/ent-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';


@NgModule({
  declarations: [
    HomeComponent,
    NewsListComponent,
    BusinessNewsComponent,
    EntNewsComponent,
    HealthNewsComponent,
    ScienceNewsComponent,
    SportNewsComponent,
    TechNewsComponent
  ],
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
  providers: [
    NewsapiservicesService
  ]
})
export class PagesModule { }
