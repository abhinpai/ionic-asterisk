import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCreditDebitPage } from './add-credit-debit';

@NgModule({
  declarations: [
    AddCreditDebitPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCreditDebitPage),
  ],
})
export class AddCreditDebitPageModule {}
