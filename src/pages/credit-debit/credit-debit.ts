import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-credit-debit',
  templateUrl: 'credit-debit.html',
})
export class CreditDebitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditDebitPage');
  }

  credit(){
    console.log("Clicked on credit");
  }

  debit() {
    console.log("Clicked on debit");
  }

}
