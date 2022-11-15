export interface SecureHeadingData {
  heading: string;
  description: string;
}
export const Data_1: Array<SecureHeadingData> = [
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
export const Data_2: Array<SecureHeadingData> = [
  {
    heading: 'Payments Below €30',
    description:
      'Remote transactions that are less than €30 do not require SCA so long as velocity limits are met. The cumulative limit of consecutive transactions without applying SCA must not be over €100. Also, the number of consecutive transactions since the last application of SCA can not be over 5.',
  },
  {
    heading: 'Fixed Amount Subscriptions',
    description:
      'These are a form of recurring transactions wherein a series of transactions of the same amount is made to the same payee. SCA only applies when the series is first set up after which it is not required.',
  },
  {
    heading: 'Merchant-initiated Transactions (MIT)',
    description:
      'Merchant-initiated transactions make use of a user’s previously stored card details. In this case the SCA flow has already been completed in the previous transaction made by the users card and hence does not need to be done again.',
  },
  {
    heading: 'Trusted Beneficiaries',
    description:
      'The user can add a trusted merchant to a list of trusted beneficiaries held by their Issuing bank, which as a process itself completes the SCA Flow. Hence no SCA application is required on subsequent transactions with the trusted merchant.',
  },
  {
    heading: 'Phone Sales (MOTO)',
    description:
      'Mail Order and Telephone Orders (MOTO) are also exempted from as they are not considered to be ‘electronic’ payments, and are out of the scope of the regulation.',
  },
  {
    heading: 'Corporate Payments',
    description:
      'Payments made through dedicated corporate processes like for e.g. central travel accounts, virtual cards, lodge cards, business cards etc. Authorities within the company may need to confirm the dedicated corporate processes and protocols to guarantee security in line with the PSD2 requirements.',
  },
];
export const Data_3: Array<SecureHeadingData> = [
  {
    heading: 'Challenge flow',
    description:
      'If the issuing bank decides it needs more proof, the authentication will follow the challenge flow where your customer will be prompted to provide additional information to authenticate their payment. An improvement made is that while 3DS1 made you design your own screen for payment authentication, 3DS2 has formulated a standardised design for all merchants. 3D Secure 2 is designed to embed the challenge flow directly within web and mobile checkout flows without requiring additional page redirects. If a customer authenticates on the merchant’s site or webpage, the 3D Secure prompt appears by default in a modal on the checkout page.',
  },
];
export const Data_4: Array<SecureHeadingData> = [
  {
    heading: 'Frictionless flow',
    description:
      '“frictionless flow” occurs where a silent authentication is performed without challenging the cardholder. 3DS 2 allows Merchants and their PSPs to send more data elements on each transaction to the cardholder’s bank. This data could be both payment-specific data like for example the shipping address, as well as contextual data, like the customer’s device ID or transaction history. The cardholder’s bank can use this information to assess the risk level of the transaction and decide on whether the data is enough to trust that the real cardholder is making the purchase or not. If the issuer believes this is the case then the transaction goes through the “frictionless” flow and authentication is completed without any additional input from the cardholder. A limited form of risk-based authentication was supported by 3DS1 however with the use of 3DS2, the ability to share more data aims to increase the number of transactions that can be authenticated without further customer input. It’s important to know that if the merchant requested for an exemption which results in a frictionless flow, the liability sits with the merchant. However, if the issuer decides to apply the exemption, the liability shifts to the issuer.',
  },
];
export const Data_5: Array<SecureHeadingData> = [
  {
    heading: 'Biometric Flow',
    description:
      'In some cases, the Issuing bank may require the users fingerprint scan or facial recognition as additional verification data before authenticating the transaction. This is known as a Biometric payment flow and it takes place through an in app-switch to the issuing-bank app, where users can authenticate using these biometric data like fingerprint or facial recognition.',
  },
];
export const Data_6: Array<SecureHeadingData> = [
  {
    heading: 'Collecting Browser Device Fingerprint Data',
    description:
      ' The merchant can use our Fingerprint Data collection Javascript file and collect the relevant device fingerprint data:',
  },
];
export const Data_7: Array<SecureHeadingData> = [
  {
    heading: 'Liability shift',
    description:
      '  If 3DS2 authentication is successful the liability of payments (fraud related chargebacks) shifts from the merchant to the card issuer. Hence for instance if a customer were to deny making a purchase, suspecting their card details have been stolen, the liability for that does not rest on the merchant, in turn protecting merchants from fraudulent transactions. However it is important to note that if a payment has been exempted from SCA the liability falls back on the merchant.',
  },
];
export const Para_1: Array<SecureHeadingData> = [
  { heading: '', 
  description: 'One of the main benefits of 3DS2 is authentication using biometrics, which all smartphones today offer. The future of biometric technologies is promising as customers are more inclined to use them due to their simplicity and speed. With fingerprint scanning or face recognition, 3DS2 will significantly help merchants fight fraud, while customers will finally experience a more secure checkout when purchasing online.' },
  { heading: '', 
  description: '3DS1 was built before the smartphone revolution and was designed only to support web-browser transactions and credit card payments. For this reason, merchants were losing sales, and payment conversions decreased significantly. In contrast, 3DS2 supports most e-payment methods, including mobile, tablet, in-app, and digital wallets, thanks to software development kits (SDKs) for Android and iOS.' },
  { heading: '', 
  description: 'Additionally, customers no longer need to enroll to authenticate themselves. 3DS2 disables the enrollment procedure where a window would pop-up redirecting the customer from the checkout page to the bank’s website. Finally, 3DS2 eliminates the disrupting and unnecessary challenges that 3DS1 created in the user experience.' },
  { heading: '', 
  description: 'Another great advantage of 3DS2 is the chargebacks liability shift for fraudulent transactions from merchants to issuing banks. The former will not be liable in case of a cardholder’s dispute or chargeback due to fraud. This means merchants will benefit from lower costs associated with chargebacks, and no transaction funds will be taken away from their account.' },
  { heading: '', 
  description: 'Finally, 3DS2 will have a risk-based authentication (RBA) that allows issuing banks to authenticate the cardholders and decide if additional security is required for an online transaction. With access to sensitive cardholder data, issuers will be better prepared to recognize illegitimate transactions. For low-risk transactions, they will have the option to authorize a ‘frictionless flow’ where the payment is approved without any security measures. Therefore, by applying 3DS2 to only high-risk transactions, merchants will see fewer false declines.' },
  { heading: '', 
  description: 'According to Visa, less than 5% of the transactions will require additional verification. Providing frictionless payments is advantageous since customers can make purchases quickly and effortlessly. Therefore, if used efficiently, 3DS2 can reduce fraud, minimize cardholder friction, decrease cart abandonment rate, and finally, contribute to a better experience for all parties.' },
];
