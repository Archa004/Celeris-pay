import { Component, OnInit } from '@angular/core';
// import { FaqPageData, faqPageData } from './faqpage.data';

@Component({
  selector: 'app-faq-page-card',
  templateUrl: './faq-page-card.component.html',
  styleUrls: ['./faq-page-card.component.css']
})
export class FaqPageCardComponent implements OnInit {
  // faqPageData: Array<FaqPageData> = faqPageData;
  constructor() { }

  ngOnInit(): void {
  }
  card_1=[
    {title:'Account Setup'},
    {para:'How do I get started?'},
    {para:'How long will it take to receive an active account?'},
    {para:'What are the requirements to perform server-to-server payments without hosted payments?'},
  ]
 
  card_2=[
    {title:'Integrations'},
    {para:'What programming languages do you support?'},
    {para:'Can I integrate with my Android/IOS mobile app?'},
    {para:'Can I still install your plugins if my business is run on an eCommerce platform?'},
  ]
  card_3=[
    {title:'3D Secure 2'},
    {para:'What is SCA?'},
    {para:'How difficult is it to implement SCA?'},
    {para:'When can SCA be exempted?'},
    {para:'What is 3DS2?'},
    {para:'When does a liability shift occur?'},
  ]
  card_4=[
    {title:''},
    {para:''},
    {para:''},
    {para:''},
  ]
  card_5=[
    {title:''},
    {para:''},
    {para:''},
    {para:''},
  ]
  card_6=[
    {title:''},
    {para:''},
    {para:''},
    {para:''},
  ]
  card_7=[
    {title:''},
    {para:''},
    {para:''},
    {para:''},
  ]
  card_8=[
    {title:''},
    {para:''},
    {para:''},
    {para:''},
  ]
  card_9=[
    {title:''},
    {para:''},
    {para:''},
    {para:''},
  ]
  card_10=[
    {title:''},
    {para:''},
    {para:''},
    {para:''},
  ]
}
