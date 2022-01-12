import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../services/newsapiservices.service';
import { Title } from "@angular/platform-browser";
@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.scss']
})
export class SportNewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService, private titleService: Title) {
    this.titleService.setTitle("NetNews | Sport Trending");
  }

  //Prikazi podatke
  sportDisplay: any = [];

  ngOnInit(): void {
    this._services.sportHeading().subscribe((result) => {
      console.log(result);
      this.sportDisplay = result.articles;
    })
  }

}
