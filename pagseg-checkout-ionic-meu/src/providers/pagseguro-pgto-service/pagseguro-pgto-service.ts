import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';
import { VarGlobalProvider } from '../var-global/var-global';


declare var PagSeguroDirectPayment: any;

@Injectable()
export class PagseguroPgtoServiceProvider {

  public credencial: Credencial;
  public dados: Dados;

  constructor(public http: HttpClient, private storage:Storage, private varGlobal:VarGlobalProvider) {

  }

  iniciar(email, token, isSandBox) {
    this.credencial.email = email;
    this.credencial.token = token;
    this.credencial.isSandBox = isSandBox;
  }

}
// CLASSE PARA ARMAZENAR NOSSOS DADOS DE ACESSO A CONTA DO PAGSEGURO
export class Credencial {
  key: string;
  urlSession: string;
  urlPagSeguroDirectPayment: string;
  urlTransacao: string;
  idSession: string;
  email: string;
  token: string;
  isSandBox: boolean;
}
// CLASSE PARA ARMAZENAR OS DADOS DA TRANSAÇÃO DE CHECKOUT NECESSÁRIOS PARA CONSUMIR A API
export class Dados {
  public id: number;
  public nome: string = 'Danilo Azevendo Santos';
  public telefone: string = '(77) 988997889';
  public email: string = 'teste@sandbox.pagseguro.com.br';
  public cpf: string = '957.937.874-61';
  public nascimento: string = '16/09/1987';
  public logradouro: string = 'Av Central';
  public numero: string = '45';
  public bairro: string = 'Centro';
  public cep: string = '45002-055';
  public cidade: string = 'Vitória da Conquista';
  public estado: string = 'ba';
  public numCard: string = '4111111111111111';
  public mesValidadeCard: string = '12';
  public anoValidadeCard: string = '2030';
  public codSegCard: string = '123';
  public hashComprador: string;        // preenchido dinamicamente
  public bandCard: string;             // preenchido dinamicamente
  public hashCard: string;             // preenchido dinamicamente
  public parcelas: Array<Object> = []; // preenchido dinamicamente
  constructor(obj?) {
    Object.assign(this, obj, {}, {});
  }
}
