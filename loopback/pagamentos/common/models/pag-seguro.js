'use strict';

var pagseguro = require('pagseguro');
var PagSeguroNode = require('node-pagseguro');
const request = require('request');
const xmlParser = require('xml2json');
var js2xmlparser = require("js2xmlparser");


var MP = require("mercadopago");



module.exports = function (Pagseguro) {

    /**
     * 
     * @param {Function(Error)} callback
     */

    Pagseguro.MercadoPago = function (callback) {
        MP..setPublishableKey("APP_USR-f9c3c300-bab0-4ae0-b5a5-e6c68f7d5b46");
        MP.getIdentificationTypes();
        callback(null);
    };





    const pagseguro = function (params) {
        this.payment.mode = 'default';
        this.payment.method = 'creditCard';
        this.payment.currency = 'BRL';
        this.payment.sender.hash = '';
        this.payment.sender.name = 'Paulo A L Forestieri';
        this.payment.sender.email = 'paforest1970@gmail.com';
        this.payment.sender.phone.areaCode = '21';
        this.payment.sender.phone.number = '992902732';
        this.payment.sender.documents.type = 'CPF';
        this.payment.sender.documents.value = '01114740780'
        this.payment.items.id = 'sku001';
        this.payment.items.description = 'Assinatura';

    }

    const obj = {
        'mode': 'default',
        'method': 'creditCard',
        'currency': 'BRL',
        'sender': {
            'name': 'Paulo A L Forestieri',
            'email': 'paforest1970@gmail.com',
            'phone': {
                'areaCode': '21',
                'number': '992902732'
            },
            'documents': {
                'type': 'CPF',
                'value': '01114740780'
            },
            'itens': {
                'id': 'sku001',
                'description': 'Asssinatura 001'
            }
        }
    }

    const enviaSender = function () {
        const params = {
            url: 'https://ws.pagseguro.uol.com.br/v2/transactions?email=paulofore@gmail.com&token=5A0836AD2E5B41B4AD993D27B4A4ED3D',
            body: js2xmlparser.parse("payment", obj)
        }

        console.log('Params:', params);
        request.post(params, function (err, response, body) {
            if (err) {
                console.log('Erro:', err);
            } else if (response.statusCode == 200) {
                console.log('Resposta(200): ', body);
                const json = JSON.parse(xmlParser.toJson(body));
                console.log('JSON - 200', JSON.stringify(json));
                //this.enviaSender();
            } else {
                console.log('Resposta(!200):', body);
                const json = JSON.parse(xmlParser.toJson(body));
                console.log('JSON - !200', JSON.stringify(json));
                console.log(body);
            }
        })
    }


    /**
     * 
     * @param {Function(Error)} callback
     */

    Pagseguro.VersaoMaisNova = function (callback) {


        //var payment = new PagSeguroNode({
        //    email: 'paulofore@gmail.com',
        //    token: 'CB4CBC8D23374F219598172EF26BEC37',
        //    sandbox: true,
        //    sandbox_email: '123123123123123@sandbox.pagseguro.com.br'
        //});

        const params = {
            url: 'https://ws.pagseguro.uol.com.br/v2/sessions?email=paulofore@gmail.com&token=5A0836AD2E5B41B4AD993D27B4A4ED3D'
        }


        request.post(params, function (err, response, body) {
            if (err) {
                console.log('Erro:', err);
            } else if (response.statusCode == 200) {
                const json = JSON.parse(xmlParser.toJson(body));
                console.log('JSON - 200', JSON.stringify(json));
                enviaSender();
            } else {
                const json = JSON.parse(xmlParser.toJson(body));
                console.log('JSON - !200', JSON.stringify(json));
                console.log(body);
            }
        })

        callback(null);
    };





    /**
    *
    * @param {Function(Error)} callback
    */
    Pagseguro.SolicitaPagamento = function (callback) {
        var pag = new pagseguro({
            email: 'paulofore@gmail.com',
            token: 'CB4CBC8D23374F219598172EF26BEC37',
            mode: 'sandbox'
        });

        //Configurando a moeda e a referência do pedido
        pag.currency('BRL');
        pag.reference('12345');

        //Adicionando itens
        pag.addItem({
            id: 1,
            description: 'Descrição do primeiro produto',
            amount: "4230.00",
            quantity: 3,
            weight: 2342
        });

        //Configurando a moeda e a referência do pedido
        pag.currency('BRL');
        pag.reference('12345');

        //Adicionando itens
        pag.addItem({
            id: 1,
            description: 'Descrição do primeiro produto',
            amount: "4230.00",
            quantity: 3,
            weight: 2342
        });


        //Configurando a entrega do pedido

        pag.shipping({
            type: 1,
            street: 'Rua Alameda dos Anjos',
            number: '367',
            complement: 'Apto 307',
            district: 'Parque da Lagoa',
            postalCode: '01452002',
            city: 'São Paulo',
            state: 'RS',
            country: 'BRA'
        });

        //Configuranto URLs de retorno e de notificação (Opcional)
        //ver https://pagseguro.uol.com.br/v2/guia-de-integracao/finalizacao-do-pagamento.html#v2-item-redirecionando-o-comprador-para-uma-url-dinamica
        pag.setRedirectURL("http://www.lojamodelo.com.br/retorno");
        pag.setNotificationURL("http://www.lojamodelo.com.br/notificacao");

        //Enviando o xml ao pagseguro
        pag.send(function (err, res) {
            if (err) {
                console.log('Erro: ', err);
            }
            console.log('Sucesso: ', res);
        });

        console.log('Objeto', JSON.stringify(pag));
        callback(null);
    };
};
