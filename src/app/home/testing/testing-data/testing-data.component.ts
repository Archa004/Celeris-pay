import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-data',
  templateUrl: './testing-data.component.html',
  styleUrls: ['./testing-data.component.css']
})
export class TestingDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  table_data_a = [
    ['American Express','AmericanExpress'],
    ['AstroPay Card',	'AstropayCard'],
    [ 'CartaSi','	CARTASI'],
    [ 'Carte Bleue','	CARTEBLEUE'],
    [ 'CMR Falabella','	CMRFalabella'],
    [ 'Cordial','	Cordial'],
    [ 'Dankort','	DANKORT'],
    [ 'Diners Club','	DinersClub'],
    [ 'Discover','	DISCOVER'],
    [ 'Hipercard','	HIPERCARD'],
    [ 'JCB','	JCB'],
    [ 'Laser','	LASER'],
    [ 'MasterCard','	MasterCard'],
    [ 'Maestro','	Maestro'],
    [ 'Maestro UK','	MaestroUK'],
    [ 'Postepay','	POSTEPAY'],
    [ 'Presto','	Presto'],
    [ 'Rupay','	Rupay'],
    [ 'Solo','	SOLO'],
    [ 'UnionPay','	UNIONPAY'],
    [ 'VisaCard','	VisaCard'],
    [ 'Visa Electron','	VISAELECTRON'],
    [ 'VPay','	VPAY'],
  ];
  table_data_b = [
['Brand','	Number','CVV','	Expiry Date'	,'Result'],
['VISA','	4200000000000000 (Non-3D Enrolled)','any 3 digits','any future date','	Success'],
['MASTER','	5500000000000004 (Non-3D Enrolled)','any 3 digits','any future date','	Success'],
['VISA','	4242424242424242 (Non-3D Enrolled)','any 3 digits','any future date','	Fail'],
['MASTER','	5454545454545454 (Non-3D Enrolled)','any 3 digits','any future date','	Fail'],
['VISA','	4711100000000000 (3D Enrolled)','any 3 digits','any future date','	Success'],
['MASTER','	5299910010000015 (3D Enrolled)','any 3 digits','any future date','	Success'],
['VISA','	4444333322221111 (3D Enrolled)','any 4 digits','any future date','	Fail'],
['MASTER','	5555444433331111 (3D Enrolled)','any 3 digits','any future date','	Fail'],
['AMEX','	375987000000005 (3D Enrolled)','any 4 digits','	any future date','	Success'],
  ]
}
