import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  prepareRoute(outlet: RouterOutlet): boolean {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
	}
}
