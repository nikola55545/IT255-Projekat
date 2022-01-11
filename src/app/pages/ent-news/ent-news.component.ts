import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../../services/newsapiservices.service';

@Component({
  selector: 'app-ent-news',
  templateUrl: './ent-news.component.html',
  styleUrls: ['./ent-news.component.css']
})
export class EntNewsComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) { }

  //Prikazi podatke
  entDisplay: any = [];

  ngOnInit(): void {
    this._services.entHeading().subscribe((result) => {
      console.log(result);
      this.entDisplay = result.articles;
    })
  }

}
