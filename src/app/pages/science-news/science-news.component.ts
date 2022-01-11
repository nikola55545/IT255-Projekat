import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../services/newsapiservices.service';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.scss']
})
export class ScienceNewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  //Prikazi podatke
  scienceDisplay: any = [];

  ngOnInit(): void {
    this._services.scienceHeading().subscribe((result) => {
      console.log(result);
      this.scienceDisplay = result.articles;
    })
  }

}
