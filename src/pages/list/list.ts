import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: any;// Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];

    this.http.get("http://192.168.0.23/core/api/jeeApi.php?apikey=KLBV1d4WblTg7vIMkGcRvswpQpXdi1NZ&type=fullData").subscribe(
      (data) => {
        console.log(data);
        this.items = data;
      }
    );
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
