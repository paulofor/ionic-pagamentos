import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
/**
 * Generated class for the ContatoServidorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato-servidor',
  templateUrl: 'contato-servidor.html',
})
export class ContatoServidorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoServidorPage');
  }

  chamaPost() {
    this.http.get('http://postman-echo.com', {}, {})
      .then(data => {
        console.log('sucesso');
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {
        console.log('Erro: ' , error);

      });
  }

}
