import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsCreditDebitPage } from './details-credit-debit';

@NgModule({
  declarations: [
    DetailsCreditDebitPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsCreditDebitPage),
  ],
})
export class DetailsCreditDebitPageModule {}
