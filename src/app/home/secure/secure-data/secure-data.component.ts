import { Component, OnInit } from '@angular/core';
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
  code = `<script src="/JS/fingerprint-datapicker-lib.js" data-form-id="myUniqueFormID"></script>`;
  code_2 = `<script src="/JS/fingerprint-datapicker-lib.js" data-form-id="myUniqueFormName"></script>`;
  code_3 = `<script src="/JS/fingerprint-datapicker-lib.js"></script>
  <form id="myForm">
     <input id="threeDS2FP" name="threeDS2FP">
  </form>
  
  <script>
  document.getElementById("threeDS2FP").value = __gateway.getFingerprintString();
  </script>`;
  code_4 = `
  var client = new ClientJS();
 
   client.getBrowserData();
 
   client.getUserAgent();
   client.getUserAgentLowerCase();
 
   client.getBrowser();
   client.getBrowserVersion();
   client.getBrowserMajorVersion();
 
   client.getEngineVersion();
 
   client.getOS();
   client.getOSVersion();
   client.getDevice();
   client.getDeviceType();
 
   client.getCPU();
 
   client.getScreenPrint();
   client.getColorDepth();
   client.getCurrentResolution();
   client.getAvailableResolution();
 
   client.isJava();
   client.getJavaVersion();
 
 
   client.getTimeZone();
 
   client.getLanguage();
   client.getSystemLanguage();
 
 `;
 code_5 = `
 "3DSecure":{
      "deviceFingerprint":{
         "timezone": "330",
         "browserColorDepth": "24",
         "browserLanguage": "en-GB",
         "browserScreenHeight": "1080",
         "browserScreenWidth": "1920",
         "os": "windows",
         "browserAcceptHeader":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*",
         "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
         "browserJavascriptEnabled": false,
         "browserJavaEnabled" : true,
         "acceptContent":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
         "browserIP" :"192.1.1.1"
      },
      "sdk":{
       "sdkAppID":"8ff65412-0e9d-4b4d-9cad-c68446930767",
       "sdkEncData":"92e265838b0a5ebf5d399f4cd6ac9ba0a2f08fdd8c8bc02f4a44654c26b6b99592e265838b0a5ebf5d399f4cd6ac9ba0a2f08fdd8c8bc02f4a44654c26b6b995",
       "sdkEphemPubKey":"92e265838b0a5ebf5d399f4cd6ac9ba0a2f08fdd8c8bc02f4a44654c26b6b995",
       "sdkMaxTimeout":"60",
       "sdkReferenceNumber":"2bfdd080-8688-4226-bb91-2d5e474e73f1",
       "sdkTransID":"98d77730-a163-4e50-98f1-3b9786c0d9aa"
 
      },
      "exemptions":{
         "lowValue":true,
         "tra": true,
         "trustedBeneficiary":true,
         "secureCorporatePayment":true,
         "delegatedAuthentication":true,
         "recurringMITExemptionSameAmount" : true,
         "recurringMITExemptionOther" : true,
         "vmid":"12345"
     },
     "challengeIndicator":"01",
     "challengeWindowSize":"05" 
 
   }
 `;

  item: any;

  constructor() {}

  ngOnInit(): void {}
}
