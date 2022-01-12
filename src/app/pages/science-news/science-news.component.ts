import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../services/newsapiservices.service';
import { Title } from "@angular/platform-browser";
@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.scss']
})
export class ScienceNewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService, private titleService: Title) {
    this.titleService.setTitle("NetNews | Science Trending");
  }

  //Prikazi podatke
  scienceDisplay: any = [];

  ngOnInit(): void {
    this._services.scienceHeading().subscribe((result) => {
      console.log(result);
      this.scienceDisplay = result.articles;
    })
  }

}
