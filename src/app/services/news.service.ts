import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/news';

const API_URL = 'https://newsapi.org/v2/';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiKey = 'd84b9e15aa83476497920e10fcfdf794';

  constructor(private http: HttpClient) {
  }

  getNewsByHeaderName(payload: any): Observable<News> {
    return this.http.get<News>(API_URL + `everything?q=${payload.name}&from=${payload.date}&sortBy=publishedAt&language=en&apiKey=${this.apiKey}`);
  }


}
