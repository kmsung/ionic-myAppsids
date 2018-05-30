import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Profile} from "../../interFaces/profile";


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name: 'homepage'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public profile = {} as Profile;
  disabledSwitch = false;
  userName: any;
  items = [
    {"id": 1, name: "첫번째 아이템"},
    {"id": 2, name: "두번째 아이템"},
    {"id": 3, name: "세번째 아이템"},
    {"id": 4, name: "네번째 아이템"}
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewDidLeave() {
    console.log('ionViewDIdLeave HomePage');
  }

  itemClicked(item) {
    console.log(item.id, item.name);
  }

  buttonClicked(event) {
    console.log(event.target.textContent);
    console.log(event.clientX + ':' + event.clientY);
    console.log(event.currentTarget.value);
    this.navCtrl.push('BindPage', {value: event.currentTarget.value});
  }

  model() {
    let modal = this.modalCtrl.create('ModalPage');
    modal.onDidDismiss(data => {
      if (Object.keys(data).length === 0) {
      } else {
        this.profile.actionSwitch = data.actionSwitch;
        this.profile.name = data.name;
        this.profile.gender = data.gender;
        this.profile.domestic = data.domestic;
        this.profile.startDate = data.startDate;
      }
      /* console.log('actionSwitch:', data.actionSwitch);
       console.log('name:', data.name);
       console.log('gender:', data.gender);
       console.log('domestic:', data.domestic);
       console.log('startDate:', data.startDate);*/
    });
    modal.present();
  }
}
