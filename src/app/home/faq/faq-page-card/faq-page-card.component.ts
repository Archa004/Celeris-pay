import { Component, OnInit } from '@angular/core';
import { FaqPageData, faqPageData } from './faqpage.data';

@Component({
  selector: 'app-faq-page-card',
  templateUrl: './faq-page-card.component.html',
  styleUrls: ['./faq-page-card.component.css']
})
export class FaqPageCardComponent implements OnInit {
  faqPageData: Array<FaqPageData> = faqPageData;
  constructor() { }

  ngOnInit(): void {
  }

}
