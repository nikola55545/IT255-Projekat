import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../services/newsapiservices.service';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _services: NewsapiservicesService, private titleService: Title) {
    this.titleService.setTitle("NetNews | World Trending");
  }

  //Prikazi podatke
  topHeadingDisplay: any = [];

  ngOnInit(): void {
    this._services.topHeading().subscribe((result) => {
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
  }

}
