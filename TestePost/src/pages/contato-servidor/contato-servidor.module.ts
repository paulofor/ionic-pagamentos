import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContatoServidorPage } from './contato-servidor';

@NgModule({
  declarations: [
    ContatoServidorPage,
  ],
  imports: [
    IonicPageModule.forChild(ContatoServidorPage),
  ],
})
export class ContatoServidorPageModule {}
