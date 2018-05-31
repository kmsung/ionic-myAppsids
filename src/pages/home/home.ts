import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Profile} from "../../interFaces/profile";
import {Account} from "../../interFaces/Account";

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
  public accountData = {} as Account;
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
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) {
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
      /*  if (Object.keys(data).length === 0) {
        } else {*/
      this.profile.actionSwitch = data.actionSwitch;
      this.profile.name = data.name;
      this.profile.gender = data.gender;
      this.profile.domestic = data.domestic;
      this.profile.startDate = data.startDate;
      /* }*/
      /* console.log('actionSwitch:', data.actionSwitch);
       console.log('name:', data.name);
       console.log('gender:', data.gender);
       console.log('domestic:', data.domestic);
       console.log('startDate:', data.startDate);*/
    });
    modal.present();
  }

  //////
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "이름과E메일주소를 입력하세요",
      inputs: [
        {
          name: 'name',
          placeholder: '이름입력'
        },
        {
          name: 'email',
          placeholder: 'E-mail입력'
        },
      ],
      buttons: [
        {
          text: '취소',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '저장',
          handler: data => {
            console.log(data);
            this.accountData = {name: data.name, email: data.email};
            this.navCtrl.push('NavPage', {account:this.accountData});
          }
        }
      ]
    });
    prompt.present();
  }

}
