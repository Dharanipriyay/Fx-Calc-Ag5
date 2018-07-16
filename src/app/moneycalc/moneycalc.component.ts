import { Component, OnInit } from '@angular/core';

import { CountrydataService } from '../countrydata.service';
@Component({
  selector: 'app-moneycalc',
  templateUrl: './moneycalc.component.html',
  styleUrls: ['./moneycalc.component.css']
})

export class MoneycalcComponent implements OnInit {

  exrate: number = parseFloat((0.0000).toFixed(2));
  sendAmt: number;
  recvAmt: number;
  recAmtInvalid: boolean = false;
  sendamtInvalid: boolean = false;
  countryFlag: boolean = false;
  countryList: any;
  currencyList: any;
  sendCurrency: String = "CUR";
  receiveCurrency: String = "CUR";
  selecectedsender: any = "From Country";
  selecectedreceiver: any = "To Country";
  constructor(private _countryData: CountrydataService) {

    this._countryData.getCountries()
      .subscribe(
        (data) => { this.countryList = data },
        err => console.error(err),
        () => console.log('done loading Counties')
      );

    this._countryData.getCurrencies()
      .subscribe(
        (cdata) => { this.currencyList = cdata },
        err => console.error(err),
        () => console.log('done loading currencies')
      );
  }

  ngOnInit() {
  }


  sendAmountEvent() {
    this.sendamtInvalid = false;
    this.recAmtInvalid = false;

    // validate amount
    if (!this.sendAmt) {
      this.sendamtInvalid = true;
      this.recvAmt = 0;
      return;
    }
    if (this.sendAmt)
      this.sendAmt = parseFloat((this.sendAmt).toFixed(2));

    if (this.selecectedsender && this.selecectedreceiver) {
      if (this.selecectedsender != "From Country" && this.selecectedreceiver != "To Country") {
        if (this.sendAmt)
          this.recvAmt = parseFloat((this.sendAmt * this.exrate).toFixed(2));
      } else
        this.countryFlag = true;
    }
  }

  recvAmountEvent() {

    this.sendamtInvalid = false;
    this.recAmtInvalid = false;

    // validate amount
    if (!this.recvAmt) {
      this.recAmtInvalid = true;
      return;
    }
    if (this.recvAmt)
      this.recvAmt = parseFloat((this.recvAmt).toFixed(2));

    if (this.selecectedsender && this.selecectedreceiver) {
      if (this.selecectedsender != "From Country" && this.selecectedreceiver != "To Country") {
        if (this.recvAmt)
          this.sendAmt = parseFloat((this.recvAmt / this.exrate).toFixed(2));
      } else
        this.countryFlag = true;
    }
  }

  changeSenderCountry() {

    if (this.selecectedsender && this.selecectedsender != "From Country") {
      this.countryFlag = false;
      for (var countrycode in this.currencyList) {
        if (this.selecectedsender == countrycode) {
          this.sendCurrency = this.currencyList[countrycode];
          break;
        }
      }
    }
    else
      this.sendCurrency = "USD";
    
      if (this.sendCurrency != "CUR" && this.receiveCurrency != "CUR")
      if (this.sendCurrency == this.receiveCurrency)
        this.exrate = parseFloat((1.0000).toFixed(2));
      else
        this.exrate = parseFloat((2.5000).toFixed(2));

    if (this.sendAmt)
      this.sendAmountEvent();
    if (this.recvAmt)
      this.recvAmountEvent();
  }

  changeReceiverCountry() {

    if (this.selecectedreceiver && this.selecectedreceiver != "To Country") {
      this.countryFlag = false;
      for (var countrycode in this.currencyList) {
        if (this.selecectedreceiver == countrycode) {
          this.receiveCurrency = this.currencyList[countrycode];
          break;
        }
      }
    }
    else
      this.sendCurrency = "USD";

    if (this.sendCurrency != "CUR" && this.receiveCurrency != "CUR")
      if (this.sendCurrency == this.receiveCurrency)
        this.exrate = parseFloat((1.0000).toFixed(2));
      else
        this.exrate = parseFloat((2.5000).toFixed(2));

    if (this.sendAmt)
      this.sendAmountEvent();
    if (this.recvAmt)
      this.recvAmountEvent();
  }

}