export const orderlist_1: Array<String> = [
  ' knowledge (something only the user knows)',
  'possession (something only the user possesses)',
  'inherence (something the user is).',
];
export const orderlist_2: Array<String> = [
  'Below 0.13% and the payment is less than €100',
  'Below 0.06% and the payment is less than €250',
  'Below 0.01% and the payment is less than €500',
];

export const unorderlist_1: Array<String> = [
  ' If the card has been successfully authenticated with 3DS2, the liability shifts from the merchant to the card issuer, and the merchant can authorize the payment.',
  
  'If authentication fails because the cardholder does not pass the challenge, liability remains with the merchant and they should not proceed with the payment.',
  
  ' If the card supports 3DS but authentication is not completed due to technical reasons like in the case of a network error, or closing the window during verification, the liability remains with the merchant, but they also get to decide whether or not to authorize the transaction.',
  
  ' If you authentication has been attempted but the issuer doesn’t support 3DS or its access control server doesn’t respond, the liability shifts to the issuer',
];
