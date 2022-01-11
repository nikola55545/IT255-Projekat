import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../services/newsapiservices.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  //Prikazi podatke
  techDisplay: any = [];

  ngOnInit(): void {
    this._services.techHeading().subscribe((result) => {
      console.log(result);
      this.techDisplay = result.articles;
    })
  }

}
