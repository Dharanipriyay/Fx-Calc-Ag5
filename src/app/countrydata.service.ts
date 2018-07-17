import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type':'applicaton/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CountrydataService {

  constructor(public http: HttpClient) { }

  	getCountries(){
  	 return this.http.get('./assets/data/country.json');
  	}

  	getCurrencies(){
  	 return this.http.get('./assets/data/currency.json');
  	}
}
