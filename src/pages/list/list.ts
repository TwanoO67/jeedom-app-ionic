import { Component } from '@angular/core';
import { JeedomService } from '../../services/jeedom.service';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  data: any = {};
  icons: string[];
  items: any;// Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public jeedom: JeedomService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.data = navParams.get('data');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];



    this.jeedom.getEquipments(this.data.id).subscribe(
      (data: Array<any>) => {
        console.log(data);
        this.items = data.map((elem)=>{
          if(elem.eqType_name === "philipsHue"){
            elem.icon = 'bulb';
          }
          return elem;
        });
      }
    );
  }

  itemTapped(event, item) {
    console.log('tap item',item);
    // That's right, we're pushing to ourselves!
    /*this.navCtrl.push(ListPage, {
      item: item
    });*/
  }
}
