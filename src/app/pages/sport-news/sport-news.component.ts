import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../services/newsapiservices.service';

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.scss']
})
export class SportNewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  //Prikazi podatke
  sportDisplay: any = [];

  ngOnInit(): void {
    this._services.sportHeading().subscribe((result) => {
      console.log(result);
      this.sportDisplay = result.articles;
    })
  }

}
