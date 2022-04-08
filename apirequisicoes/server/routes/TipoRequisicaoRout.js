const express = require('express');
const routes = express.Router();
const controle = require('../controller/TipoRequisicaoCont');

routes.route('/tiporequisicao').get(controle.listar);
routes.route('/tiporequisicao').post(controle.incluir);
routes.route('/tiporequisicao').put(controle.alterar);
routes.route('/tiporequisicao/:id').delete(controle.excluir);
routes.route('/tiporequisicao/:id').get(controle.obterPeloId);
routes.route('/tiporequisicao/filtro/:filtro').get(controle.filtrar);

module.exports = routes;