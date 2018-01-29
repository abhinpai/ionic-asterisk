import { DetailsBankPage } from './../details-bank/details-bank';
import { AddBankPage } from './../add-bank/add-bank';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bank',
  templateUrl: 'bank.html',
})
export class BankPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankPage');
  }

  addBank(){
    this.navCtrl.push(AddBankPage);
  }

  viewBank(){
    this.navCtrl.push(DetailsBankPage);
  }

}
