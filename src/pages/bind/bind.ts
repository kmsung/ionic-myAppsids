import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bind',
  templateUrl: 'bind.html',
})
export class BindPage {
  myValue:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myValue = navParams.get('value');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BindPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDIdLeave BindPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

}
