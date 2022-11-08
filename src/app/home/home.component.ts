import { Component, OnInit } from '@angular/core';
import { homePageData, HomePageData } from './homepage.data';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Array<HomePageData> = homePageData;
  constructor() {}

  ngOnInit(): void {
  }

}
