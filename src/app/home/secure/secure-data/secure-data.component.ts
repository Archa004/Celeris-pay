import { Component, OnInit } from '@angular/core';
import {
  SecureCodeData,
  secureCodeData,
  secureCodeData_1,
  secureCodeData_2,
  secureCodeData_3,
} from './securecode.data';
import {
  Data_1,
  Data_2,
  Data_3,
  Data_4,
  Data_5,
  Data_6,
  Data_7,

  Para_1,

  SecureHeadingData,
} from './secureheading.data';
import {
  imageoneData,
  imagethreeData,
  imagetwoData,
  SecureImageData,
} from './secureimage.data';
import { orderlist_1, orderlist_2, unorderlist_1, } from './secureorderlist.data';

@Component({
  selector: 'app-secure-data',
  templateUrl: './secure-data.component.html',
  styleUrls: ['./secure-data.component.css'],
})
export class SecureDataComponent implements OnInit {
  // image_data

  imageoneData: Array<SecureImageData> = imageoneData;
  imagetwoData: Array<SecureImageData> = imagetwoData;
  imagethreeData: Array<SecureImageData> = imagethreeData;

  // code_data

  secureCodeData: Array<SecureCodeData> = secureCodeData;
  secureCodeData_1: Array<SecureCodeData> = secureCodeData_1;
  secureCodeData_2: Array<SecureCodeData> = secureCodeData_2;
  secureCodeData_3: Array<SecureCodeData> = secureCodeData_3;

  // heading_and_paragraph

  data_1: Array<SecureHeadingData> = Data_1;
  data_2: Array<SecureHeadingData> = Data_2;
  data_3: Array<SecureHeadingData> = Data_3;
  data_4: Array<SecureHeadingData> = Data_4;
  data_5: Array<SecureHeadingData> = Data_5;
  data_6: Array<SecureHeadingData> = Data_6;
  data_7: Array<SecureHeadingData> = Data_7;
  para_1: Array<SecureHeadingData> = Para_1;

  // orderlist

  orderlist_1: Array<String> = orderlist_1;
  orderlist_2: Array<String> = orderlist_2;
  unorderlist_1: Array<String> = unorderlist_1;



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

  table_data_x = [
    row : {
      columns: [],
      isColor: yes
    }
    ['Scenarios', 'Issuer in EEA region', 'Issuer outside of EEA region'],
    ['Acquirer in EEA region', 'SCA required', 'SCA exempted'],
    ['Acquirer outside of EEA region', 'SCA exempted', 'SCA exempted'],
  ];

  // table_data_1 = [
  //   {
  //     th_1: 'Scenarios',
  //     th_2: 'Issuer in EEA region',
  //     th_3: 'Issuer outside of EEA region',
  //     td_1: 'Acquirer in EEA region',
  //     td_2: 'SCA required',
  //     td_3: 'SCA exempted',
  //     td_4: 'Acquirer outside of EEA region',
  //   },
  // ];

  item: any;
  String: any;

  constructor() { }

  ngOnInit(): void { }
}
