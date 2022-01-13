import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/news';

const API_URL = 'https://newsapi.org/v2/';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  //Ajde pomozi Boze
  newApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d84b9e15aa83476497920e10fcfdf794";
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d84b9e15aa83476497920e10fcfdf794";
  entApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=d84b9e15aa83476497920e10fcfdf794";
  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d84b9e15aa83476497920e10fcfdf794";
  scienceApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=d84b9e15aa83476497920e10fcfdf794";
  sportApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=d84b9e15aa83476497920e10fcfdf794";
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d84b9e15aa83476497920e10fcfdf794";
  apiKey = 'd84b9e15aa83476497920e10fcfdf794';

  //Top Heading
  topHeading(): Observable<any> {
    return this._http.get(this.newApiUrl);
  }
  //Biznis
  businessHeading(): Observable<any> {
    return this._http.get(this.businessApiUrl);
  }
  //Zabava
  entHeading(): Observable<any> {
    return this._http.get(this.entApiUrl);
  }
  //Zdravlje Pravoslavlje
  healthHeading(): Observable<any> {
    return this._http.get(this.healthApiUrl);
  }
  //gde ima nauke ima i muke
  scienceHeading(): Observable<any> {
    return this._http.get(this.scienceApiUrl);
  }
  //reci ne Sportu
  sportHeading(): Observable<any> {
    return this._http.get(this.sportApiUrl);
  }
  //Tehnologija
  techHeading(): Observable<any> {
    return this._http.get(this.techApiUrl);
  }
  getNewsByHeaderName(payload: any): Observable<News> {
    return this._http.get<News>(API_URL + `everything?q=${payload.name}&from=${payload.date}&sortBy=publishedAt&language=en&apiKey=${this.apiKey}`);
  }
}
