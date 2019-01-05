import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';


/**
 * Generated class for the EditaCartaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edita-cartao',
  templateUrl: 'edita-cartao.html',
})
export default class EditaCartaoPage {

  item;
  resposta: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaCartaoPage');
    this.item = { 'usuario': '' };
  }

  onSubmit() {
    console.log('Chamou sub', this.item);
    //this.resposta = this.item.usuario;
    this.chamadaHttpNativo();
  }

  /*
  chamaHttp() {
    this.http.post('https://some.domain', { 'cardToken='+token + '&amount=500' }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(data => {
      console.log(data.data);
    }).catch(error => {
      console.log(error.status);
    });
  }
  */

  chamadaHttpNativo() {
    this.http.get('http://ionic.io', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        this.resposta = data.data;
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }

}
