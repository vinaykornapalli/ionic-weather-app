import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { HttpModule } from '@angular/http';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  city:string;
  state:string;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage
   ) {
   
    this.storage.get('location').then((val)=>{
      if(val != null)
      {
        let location = JSON.parse(val);
        this.city = location.city;
        this.state = location.state;

      }
      else{
        this.city = 'Raipur';
        this.state = 'IN';
      }
    });

  }

  saveForm()
  {
    let location = 
    {
      city:this.city,
      state:this.state
    }

    this.storage.set('location',JSON.stringify(location));
    this.navCtrl.push(HomePage);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

}
