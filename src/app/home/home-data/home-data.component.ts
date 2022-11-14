import { Component, OnInit } from '@angular/core';
import { homePageData, HomePageData } from './homepage.data';


@Component({
  selector: 'app-home-data',
  templateUrl: './home-data.component.html',
  styleUrls: ['./home-data.component.css']
})
export class HomeDataComponent implements OnInit {
  data: Array<HomePageData> = homePageData;
  constructor() { }

  ngOnInit(): void {
  }

}
