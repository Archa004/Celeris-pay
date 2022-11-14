import { Component, Input, OnInit } from '@angular/core';
import { HomePageData } from '../homepage.data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item!: HomePageData;
  constructor() { }

  ngOnInit(): void {
  }

}
