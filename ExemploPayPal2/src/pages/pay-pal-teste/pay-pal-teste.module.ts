import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayPalTestePage } from './pay-pal-teste';

@NgModule({
  declarations: [
    PayPalTestePage,
  ],
  imports: [
    IonicPageModule.forChild(PayPalTestePage),
  ],
})
export class PayPalTestePageModule {}
