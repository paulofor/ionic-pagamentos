import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TelaPagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-pagamento',
  templateUrl: 'tela-pagamento.html',
})
export class TelaPagamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private teste: MercadoPago) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaPagamentoPage');
  }

}
