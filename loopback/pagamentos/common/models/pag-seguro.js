'use strict';

var pagseguro = require('pagseguro');
var PagSeguro = require('node-pagseguro');

module.exports = function (Pagseguro) {


    /**
    *
    * @param {Function(Error)} callback
    */
    Pagseguro.SolicitaPagamento = function (callback) {
        var pag = new pagseguro({
            email: 'paulofore@gmail.com',
            token: 'CB4CBC8D23374F219598172EF26BEC37',
            mode : 'sandbox'
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
                console.log('Erro: ' , err);
            }
            console.log('Sucesso: ' , res);
        });

        console.log('Objeto', JSON.stringify(pag));
        callback(null);
    };
};
