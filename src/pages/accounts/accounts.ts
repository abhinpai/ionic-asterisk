import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AddAccountPage } from '../add-account/add-account';
import { DetailsAccountPage } from '../details-account/details-account';

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsPage');
  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  addAccount(){
    this.navCtrl.push(AddAccountPage);
  }

  viewAccount(){
    this.navCtrl.push(DetailsAccountPage);
  }

}
