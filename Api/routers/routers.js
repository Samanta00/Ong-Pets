const express=require('express');
const router= express.Router()

const controller=require('../controll/controller')








router.get('/Doguinho-Ong/login', controller.callPeople)

router.post('/Doguinho-Ong/cadastro', controller.cadastroUser)


module.exports=router