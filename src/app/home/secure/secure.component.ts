import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  data = [
    {
      heading: 'What is 3DS2?',
      description: '3DS stands for 3D-Secure authentication service, a secure protocol that protects and secures online purchasing transactions. This allows customers to securely process payments without an increased risk of liability of fraudulent payments to the card issuer.',
      list: []
    },
    {
      heading: 'What is 3DS2?',
      description: '3DS stands for 3D-Secure authentication service, a secure protocol that protects and secures online purchasing transactions. This allows customers to securely process payments without an increased risk of liability of fraudulent payments to the card issuer.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
