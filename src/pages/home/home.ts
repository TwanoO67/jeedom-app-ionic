import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { JeedomService } from '../../services/jeedom.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public api_url = "";
  public api_key = "";

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    public jeedom: JeedomService
  ) {
    storage.get('api_url').then((val) => {
      this.api_url = val;
    });
    storage.get('api_key').then((val) => {
      this.api_key = val;
    });
  }

  public save(){
    this.storage.set('api_url',this.api_url);
    this.storage.set('api_key',this.api_key);
    this.refresh();
  }

  public refresh(){
    this.jeedom.getFullData();
  }

}
