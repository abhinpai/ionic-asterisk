import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNotesPage } from '../add-notes/add-notes';
import { DetailsNotesPage } from '../details-notes/details-notes';


@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
  }

  addNote(){
    this.navCtrl.push(AddNotesPage);
  }


  viewNote(){
    this.navCtrl.push(DetailsNotesPage);
  }
}
