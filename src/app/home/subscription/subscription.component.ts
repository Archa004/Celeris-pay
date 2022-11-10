import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  code = `
  {
    "name": "Video Streaming Service Plan",
    "description": "Video Streaming Service basic plan",
    "code": "MYPLAN",
    "installments": [{
      "period": "WEEK",
      "frequency": 2,
      "totalInstallments": 1,
      "type": "TRIAL",
      "sequence": 1,
      "amount": "10",
      "currencyCode": "USD"
    }, {
      "period": "MONTH",
      "frequency": 2,
      "totalInstallments": 12,
      "type": "REGULAR",
      "sequence": 2,
      "amount": "10",
      "currencyCode": "USD"
    }],
    "carryForwardAmount": true,
    "paymentFailureThreshold": 3
   }
  `;
  
}
