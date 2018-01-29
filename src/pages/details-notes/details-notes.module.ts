import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsNotesPage } from './details-notes';

@NgModule({
  declarations: [
    DetailsNotesPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsNotesPage),
  ],
})
export class DetailsNotesPageModule {}
