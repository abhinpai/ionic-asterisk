import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditDebitPage } from './credit-debit';

@NgModule({
  declarations: [
    CreditDebitPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditDebitPage),
  ],
})
export class CreditDebitPageModule {}
