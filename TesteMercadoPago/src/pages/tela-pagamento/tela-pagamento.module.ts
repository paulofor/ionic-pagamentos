import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaPagamentoPage } from './tela-pagamento';

@NgModule({
  declarations: [
    TelaPagamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaPagamentoPage),
  ],
})
export class TelaPagamentoPageModule {}
