import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsBankPage } from './details-bank';

@NgModule({
  declarations: [
    DetailsBankPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsBankPage),
  ],
})
export class DetailsBankPageModule {}
