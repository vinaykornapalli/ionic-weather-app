import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  
  apiKey = "96a56000e70744cd3f1ab8f1955aacb9";
  url;
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url ="http://api.openweathermap.org/data/2.5/weather?q=";
  }
   getWeather(city, state)
   {
     return this.http.get(this.url+city+","+state+"&APPID="+this.apiKey+"&units=metric").map(res => res.json());
   }
} 
