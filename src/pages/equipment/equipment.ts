import { Component } from '@angular/core';
import { JeedomService } from '../../services/jeedom.service';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html'
})
export class EquipmentPage {
  data: any = {};
  icons: string[];
  items: any;// Array<{title: string, note: string, icon: string}>;

  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public jeedom: JeedomService,
  public alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.data = navParams.get('data');
    console.log(this.data);

    this.items = [];

    this.jeedom.getCommands(this.data.id).subscribe(
      (data: Array<any>) => {
        console.log(data);
        this.items = data.map((elem)=>{
          if(elem.type === "info"){
            elem.icon = 'information-circle';
          }
          else if(elem.type === "action"){
            elem.icon = 'flash';
          }
          return elem;
        });
      }
    );
  }

  itemTapped(event, item) {
    console.log('tap item',item);
    this.jeedom.action(item.id).subscribe((data: Array<any>) =>
    {
      console.log(data);
      if(item.type == "info"){
        let alert = this.alertCtrl.create({
          title: item.name,
          subTitle: data,
          buttons: ['Ok']
        });
        alert.present();
      }

    }
    );
  }
}
