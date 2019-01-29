'use strict';

var pagseguro = require('pagseguro');

module.exports = function (Pagseguro) {


    /**
    *
    * @param {Function(Error)} callback
    */
    Pagseguro.SolicitaPagamento = function (callback) {
        var pag = new pagseguro({
            email: 'suporte@lojamodelo.com.br',
            token: '95112EE828D94278BD394E91C4388F20'
        });
        console.log('Objeto' , JSON.stringify(pag));
        callback(null);
    };
};
