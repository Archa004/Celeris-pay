import { Component, OnInit } from '@angular/core';
import { SecureCodeData, secureCodeData, secureCodeData_1, secureCodeData_2, } from './securecode.data';
import {
  secureOneData,
  securePageData,
  SecurePageData,
  secureTwoData,
} from './securepage.data';

@Component({
  selector: 'app-secure-data',
  templateUrl: './secure-data.component.html',
  styleUrls: ['./secure-data.component.css'],
})
export class SecureDataComponent implements OnInit {
  data = [
    {
      heading: 'What is 3DS?',
      description:
        '3DS stands for 3D-Secure authentication service, a secure protocol that protects and secures online purchasing transactions. This allows customers to securely process payments without an increased risk of liability of fraudulent payments to the card issuer.',
    },
    {
      heading: 'What is 3DS2?',
      description:
        'The newest version of 3DS, namely 3DS2 offers an improved overall checkout experience when compared with its previous version. It uses a wider range of data and biometric authentication to allow for “frictionless authentication”, which means a more secure and smooth payment flow for both merchants as well as their customers. For businesses in Europe, it’s the best way to comply with the new SCA requirements. It addresses the issue of customer authentication in remote payments while providing the fraud prevention and chargeback protection benefits of its previous version.',
    },
    {
      heading: 'What is SCA?',
      description:
        ' SCA stands for strong customer authentication and is a regulatory requirement by the EU Revised Directive on Payment Services. SCA requires you to build additional authentication into your payment flow, using two out of the following three authentication elements:',
    },
  ];
  securePageData: Array<SecurePageData> = securePageData;
  secureOneData: Array<SecurePageData> = secureOneData;
  secureTwoData: Array<SecurePageData> = secureTwoData;


  secureCodeData: Array<SecureCodeData> = secureCodeData;
  secureCodeData_1: Array<SecureCodeData> = secureCodeData_1;
  secureCodeData_2: Array<SecureCodeData> = secureCodeData_2;
 

  data_1 = [
    {
      title: 'Payments Below €30',
      description:
        'Remote transactions that are less than €30 do not require SCA so long as velocity limits are met. The cumulative limit of consecutive transactions without applying SCA must not be over €100. Also, the number of consecutive transactions since the last application of SCA can not be over 5.',
    },
    {
      title: 'Fixed Amount Subscriptions',
      description:
        'These are a form of recurring transactions wherein a series of transactions of the same amount is made to the same payee. SCA only applies when the series is first set up after which it is not required.',
    },
    {
      title: 'Merchant-initiated Transactions (MIT)',
      description:
        'Merchant-initiated transactions make use of a user’s previously stored card details. In this case the SCA flow has already been completed in the previous transaction made by the users card and hence does not need to be done again.',
    },
    {
      title: 'Trusted Beneficiaries',
      description:
        'The user can add a trusted merchant to a list of trusted beneficiaries held by their Issuing bank, which as a process itself completes the SCA Flow. Hence no SCA application is required on subsequent transactions with the trusted merchant.',
    },
    {
      title: 'Phone Sales (MOTO)',
      description:
        'Mail Order and Telephone Orders (MOTO) are also exempted from as they are not considered to be ‘electronic’ payments, and are out of the scope of the regulation.',
    },
    {
      title: 'Corporate Payments',
      description:
        'Payments made through dedicated corporate processes like for e.g. central travel accounts, virtual cards, lodge cards, business cards etc. Authorities within the company may need to confirm the dedicated corporate processes and protocols to guarantee security in line with the PSD2 requirements.',
    },
  ];

  data_2 = [
    {
      para: ' These must be independent of one another, in that the breach of one does notcompromise the reliability of the others, and is designed in such a way asto protect the confidentiality of the authentication data.” To better understand what this means and how it will affect business, it is first important to know what comprises each of these 3 categories. The Knowledge category means something only a user Knows like for example a password or PIN that they have to remember. The Possession category means something the user owns like a phone or wearable device. Lastly, the Inherence category means something a customer is, something that is unique to them like their fingerprint or facial recognition. The SCA essentially requires at least 2 of these categories to be in play for authentication to take place.',
    },
    {
      para: 'SCA only applies to processing payments from cards issued in Europe (including the UK) AND you are processing these payments through a European acquirer. If none or only one of the two statements applies to you SCA is not required, but should still be applied out of safety. However even if SCA does apply, certain payments processed may fall out of the requirement for SCA and may be exempted.',
    },
  ];

  data_3 = [
    {
      para: ' One of the main benefits of 3DS2 is authentication using biometrics, which all smartphones today offer. The future of biometric technologies is promising as customers are more inclined to use them due to their simplicity and speed. With fingerprint scanning or face recognition, 3DS2 will significantly help merchants fight fraud, while customers will finally experience a more secure checkout when purchasing online.',
    },
    {
      para: '3DS1 was built before the smartphone revolution and was designed only to support web-browser transactions and credit card payments. For this reason, merchants were losing sales, and payment conversions decreased significantly. In contrast, 3DS2 supports most e-payment methods, including mobile, tablet, in-app, and digital wallets, thanks to software development kits (SDKs) for Android and iOS.',
    },
    {
      para: 'Additionally, customers no longer need to enroll to authenticate themselves. 3DS2 disables the enrollment procedure where a window would pop-up redirecting the customer from the checkout page to the bank’s website. Finally, 3DS2 eliminates the disrupting and unnecessary challenges that 3DS1 created in the user experience.',
    },
    {
      para: 'Another great advantage of 3DS2 is the chargebacks liability shift for fraudulent transactions from merchants to issuing banks. The former will not be liable in case of a cardholder’s dispute or chargeback due to fraud. This means merchants will benefit from lower costs associated with chargebacks, and no transaction funds will be taken away from their account.',
    },
    {
      para: 'Finally, 3DS2 will have a risk-based authentication (RBA) that allows issuing banks to authenticate the cardholders and decide if additional security is required for an online transaction. With access to sensitive cardholder data, issuers will be better prepared to recognize illegitimate transactions. For low-risk transactions, they will have the option to authorize a ‘frictionless flow’ where the payment is approved without any security measures. Therefore, by applying 3DS2 to only high-risk transactions, merchants will see fewer false declines.',
    },
    {
      para: 'According to Visa, less than 5% of the transactions will require additional verification. Providing frictionless payments is advantageous since customers can make purchases quickly and effortlessly. Therefore, if used efficiently, 3DS2 can reduce fraud, minimize cardholder friction, decrease cart abandonment rate, and finally, contribute to a better experience for all parties.',
    },
  ];

  
 
 
  data_4 = [
    {
      title: 'Challenge flow',
      para: 'If the issuing bank decides it needs more proof, the authentication will follow the challenge flow where your customer will be prompted to provide additional information to authenticate their payment. An improvement made is that while 3DS1 made you design your own screen for payment authentication, 3DS2 has formulated a standardised design for all merchants. 3D Secure 2 is designed to embed the challenge flow directly within web and mobile checkout flows without requiring additional page redirects. If a customer authenticates on the merchant’s site or webpage, the 3D Secure prompt appears by default in a modal on the checkout page.',
    },
  ];
  data_5 = [
    {
      title: 'Frictionless flow',
      para: '“frictionless flow” occurs where a silent authentication is performed without challenging the cardholder. 3DS 2 allows Merchants and their PSPs to send more data elements on each transaction to the cardholder’s bank. This data could be both payment-specific data like for example the shipping address, as well as contextual data, like the customer’s device ID or transaction history. The cardholder’s bank can use this information to assess the risk level of the transaction and decide on whether the data is enough to trust that the real cardholder is making the purchase or not. If the issuer believes this is the case then the transaction goes through the “frictionless” flow and authentication is completed without any additional input from the cardholder. A limited form of risk-based authentication was supported by 3DS1 however with the use of 3DS2, the ability to share more data aims to increase the number of transactions that can be authenticated without further customer input. It’s important to know that if the merchant requested for an exemption which results in a frictionless flow, the liability sits with the merchant. However, if the issuer decides to apply the exemption, the liability shifts to the issuer.',
    },
  ];
  data_6 = [
    {
      title: 'Biometric Flow',
      para: 'In some cases, the Issuing bank may require the users fingerprint scan or facial recognition as additional verification data before authenticating the transaction. This is known as a Biometric payment flow and it takes place through an in app-switch to the issuing-bank app, where users can authenticate using these biometric data like fingerprint or facial recognition.',
    },
  ];
  data_7 = [
    {
      title: 'Collecting Browser Device Fingerprint Data',
      para: ' The merchant can use our Fingerprint Data collection Javascript file and collect the relevant device fingerprint data:',
    },
  ];
  orderlist_1 = [
    {
      line_1: ' knowledge (something only the user knows)',
      line_2: 'possession (something only the user possesses)',
      line_3: 'inherence (something the user is).',
    },
  ];
  orderlist_2 = [
    {
      line_1: ' Below 0.13% and the payment is less than €100',
      line_2: 'Below 0.06% and the payment is less than €250',
      line_3: 'Below 0.01% and the payment is less than €500',
    },
  ];
  unorderlist_1 = [
    {
      list: ' If the card has been successfully authenticated with 3DS2, the liability shifts from the merchant to the card issuer, and the merchant can authorize the payment.',
    },
    {
      list: 'If authentication fails because the cardholder does not pass the challenge, liability remains with the merchant and they should not proceed with the payment.',
    },
    {
      list: ' If the card supports 3DS but authentication is not completed due to technical reasons like in the case of a network error, or closing the window during verification, the liability remains with the merchant, but they also get to decide whether or not to authorize the transaction.',
    },
    {
      list: ' If you authentication has been attempted but the issuer doesn’t support 3DS or its access control server doesn’t respond, the liability shifts to the issuer',
    },
  ];

  table_data_1 = [
    {
      th_1: 'Scenarios',
      th_2: 'Issuer in EEA region',
      th_3: 'Issuer outside of EEA region',
      td_1: 'Acquirer in EEA region',
      td_2: 'SCA required',
      td_3: 'SCA exempted',
      td_4: 'Acquirer outside of EEA region',
    },
  ];
  data_8 = [
    {
      title: 'Liability shift',
      para_1:
        ' If 3DS2 authentication is successful the liability of payments (fraud related chargebacks) shifts from the merchant to the card issuer. Hence for instance if a customer were to deny making a purchase, suspecting their card details have been stolen, the liability for that does not rest on the merchant, in turn protecting merchants from fraudulent transactions. However it is important to note that if a payment has been exempted from SCA the liability falls back on the merchant.',
      para_2: ' As a rule of thumb: this shift only occurs when a payment has been successfully authenticated with 3DS. Liability shifts based on circumstances:',
    },
  ];

  item: any;


  constructor() {}

  ngOnInit(): void {}
}
