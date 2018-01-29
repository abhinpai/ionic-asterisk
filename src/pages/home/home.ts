import { CreditDebitPage } from './../credit-debit/credit-debit';
import { NotePage } from './../note/note';
import { AccountsPage } from './../accounts/accounts';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BankPage } from '../bank/bank';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = AccountsPage;
  tab2Root: any = NotePage;
  tab3Root: any = CreditDebitPage;
  tab4Root: any = BankPage;

  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder,) {

  }

}
