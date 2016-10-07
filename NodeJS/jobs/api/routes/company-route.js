'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/company-controller');

//Retrieve
router.get('/companies', ctrl.getCompanies); //se der um put em companies todas as empresas serão atualizadas
//Retrieve
router.get('/company/:id', ctrl.getCompany);
//Create
router.post('/company', ctrl.saveCompany);
//Update
router.put('/company/:id', ctrl.updateCompany); //precisa passar o identificador da empresa que será atualizada - utilizado também para atualizar tudo se o parâmetro não for passado
//para fazer um put no portman: http://localhost:3000/company/0
//Delete - fazer inativar e nas queryes trazer registros ativos apenas
router.delete('/company/:id', ctrl.removeCompany);


module.exports = router;
