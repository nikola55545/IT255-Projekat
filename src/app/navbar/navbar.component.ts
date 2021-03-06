import { Component, OnInit } from '@angular/core';
import noUiSlider from 'nouislider';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NewsInput } from 'src/app/models/news-input';
import * as newsActions from '../state/news-state/news.actions';
import * as fromNews from '../state/news-state/news.reducer';
import { News } from 'src/app/models/news';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faSearch = faSearch;
  faUser = faUser;
  weatherDisplay: any;

  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  newsHeaderName: string = null;
  newsInput: NewsInput = { name: null, date: null, id: null };
  error$: Observable<String>;
  constructor(private dataService: DataService,
    private router: Router, private spinner: NgxSpinnerService, private store: Store<fromNews.AppState>) { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    var slider = document.getElementById('sliderRegular');

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById('sliderDouble');

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }

  getDateNow() {
    const today = new Date().toISOString().slice(0, 10)
    return today;
  }


  getNews() {
    this.newsInput.name = this.newsHeaderName;
    this.newsInput.date = this.date;
    this.store.dispatch(new newsActions.LoadNews(this.newsInput));
    this.error$ = this.store.pipe(select(fromNews.getNewError));
    console.log(this.error$);
    setTimeout(() => {
      this.router.navigateByUrl('/news-list');
    }, 1500);
  }


  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }


}
