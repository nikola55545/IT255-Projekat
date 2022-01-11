import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../services/newsapiservices.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.scss']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  //Prikazi podatke
  businessDisplay: any = [];

  ngOnInit(): void {
    this._services.businessHeading().subscribe((result) => {
      console.log(result);
      this.businessDisplay = result.articles;
    })
  }

}