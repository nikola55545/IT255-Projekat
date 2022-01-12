import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../services/newsapiservices.service';
import { Title } from "@angular/platform-browser";
@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.scss']
})
export class TechNewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService, private titleService: Title) {
    this.titleService.setTitle("NetNews | Technology Trending");
  }

  //Prikazi podatke
  techDisplay: any = [];

  ngOnInit(): void {
    this._services.techHeading().subscribe((result) => {
      console.log(result);
      this.techDisplay = result.articles;
    })
  }

}
