import { DetailsNotesPageModule } from './../pages/details-notes/details-notes.module';
import { DetailsBankPage } from './../pages/details-bank/details-bank';
import { AddCreditDebitPageModule } from './../pages/add-credit-debit/add-credit-debit.module';
import { AddBankPageModule } from './../pages/add-bank/add-bank.module';
import { CreditDebitPageModule } from './../pages/credit-debit/credit-debit.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { AccountsPageModule } from '../pages/accounts/accounts.module';
import { BankPageModule } from '../pages/bank/bank.module';
import { NotePageModule } from '../pages/note/note.module';
import { AddAccountPageModule } from '../pages/add-account/add-account.module';
import { AddNotesPageModule } from '../pages/add-notes/add-notes.module';
import { DetailsAccountPageModule } from '../pages/details-account/details-account.module';
import { DetailsCreditDebitPageModule } from '../pages/details-credit-debit/details-credit-debit.module';
import { DetailsBankPageModule } from '../pages/details-bank/details-bank.module';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    AccountsPageModule,
    CreditDebitPageModule,
    BankPageModule,
    NotePageModule,
    AddAccountPageModule,
    AddBankPageModule,
    AddCreditDebitPageModule,
    AddNotesPageModule,
    DetailsAccountPageModule,
    DetailsBankPageModule,
    DetailsCreditDebitPageModule,
    DetailsNotesPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
