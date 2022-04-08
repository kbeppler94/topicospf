const express = require('express');
const routes = express.Router();
const controle = require('../controller/AndamentoCont');

routes.route('/andamento').get(controle.listar);
routes.route('/andamento').post(controle.incluir);
routes.route('/andamento').put(controle.alterar);
routes.route('/andamento/:id').delete(controle.excluir);
routes.route('/andamento/:id').get(controle.obterPeloId);
routes.route('/andamento/filtro/:filtro').get(controle.filtrar);

module.exports = routes;