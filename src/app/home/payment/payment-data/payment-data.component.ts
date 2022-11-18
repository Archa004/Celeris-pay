import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-data',
  templateUrl: './payment-data.component.html',
  styleUrls: ['./payment-data.component.css'],
})
export class PaymentDataComponent implements OnInit {
  [x: string]: any;

  constructor() {}

  ngOnInit(): void {}
  unorderlist_1 = [
    [
      ' The client makes a payment call and get the redirection URL and post data in response.',
    ],
    [
      'The client performs a form post to the redirection URL and sends the data in the form params.',
    ],
    [
      ' After a successful/failed/pending payment, CelerisPay send the customer back to the client’s respective return Url.',
    ],
    [
      ' The client reads the response and make a getTransactionStatus API call to get the correct details of the transaction.',
    ],
    [
      'In case of a delayed response, the client may get a notification to the respective return URL mentioned in the API call. Again it is advised to make a getTransactionStatus API call to get the correct details of the transaction.',
    ],
  ];
  // unorderlist_1 = [
  //   {
  //     list: ' If the card has been successfully authenticated with 3DS2, the liability shifts from the merchant to the card issuer, and the merchant can authorize the payment.',
  //   },
  //   {
  //     list: 'If authentication fails because the cardholder does not pass the challenge, liability remains with the merchant and they should not proceed with the payment.',
  //   },
  //   {
  //     list: ' If the card supports 3DS but authentication is not completed due to technical reasons like in the case of a network error, or closing the window during verification, the liability remains with the merchant, but they also get to decide whether or not to authorize the transaction.',
  //   },
  //   {
  //     list: ' If you authentication has been attempted but the issuer doesn’t support 3DS or its access control server doesn’t respond, the liability shifts to the issuer',
  //   },
  // ];
}
