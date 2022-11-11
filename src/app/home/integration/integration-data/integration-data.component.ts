import { Component, OnInit } from '@angular/core';
import { IntegrationPageData, integrationPageData, mobileData, pluginsData, } from './integrationpage.data';

@Component({
  selector: 'app-integration-data',
  templateUrl: './integration-data.component.html',
  styleUrls: ['./integration-data.component.css']
})
export class IntegrationDataComponent implements OnInit {
  
  data: Array<IntegrationPageData> = integrationPageData;
  pluginsData: Array<IntegrationPageData> = pluginsData;
  mobileData: Array<IntegrationPageData> = mobileData;

  constructor() { }

  ngOnInit(): void {
  }

}
