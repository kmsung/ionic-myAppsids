import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Account} from "../../interFaces/Account";
import {EmailComposer} from "@ionic-native/email-composer";

/**
 * Generated class for the NavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {
  private account = {} as Account;

  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavPage');
    this.account = this.navParams.get('account');
    console.log(this.account);
  }

  sendEmail(account) {
    let emailInfo = {
      to: account.email,
      subject: 'TO ' + account.name + ' Hello',
      body: '', ishtml: true
    };
    this.emailComposer.open(emailInfo)

  }
}
