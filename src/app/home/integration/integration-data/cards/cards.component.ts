import { Component, Input, OnInit } from '@angular/core';
import { IntegrationPageData, integrationPageData } from '../integrationpage.data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() item!: IntegrationPageData;
  


  constructor() { }

  ngOnInit(): void {
  }

}
