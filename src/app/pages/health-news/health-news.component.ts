import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../services/newsapiservices.service';

@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.scss']
})
export class HealthNewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  //Prikazi podatke
  healthDisplay: any = [];

  ngOnInit(): void {
    this._services.healthHeading().subscribe((result) => {
      console.log(result);
      this.healthDisplay = result.articles;
    })
  }

}
