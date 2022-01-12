import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../services/newsapiservices.service';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-ent-news',
  templateUrl: './ent-news.component.html',
  styleUrls: ['./ent-news.component.scss']
})
export class EntNewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService, private titleService: Title) {
    this.titleService.setTitle("NetNews | Entertainment Trending");
  }

  //Prikazi podatke
  entDisplay: any = [];

  ngOnInit(): void {
    this._services.entHeading().subscribe((result) => {
      console.log(result);
      this.entDisplay = result.articles;
    })
  }

}
