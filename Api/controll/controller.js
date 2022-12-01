const cliente=require('../model/banco.js');
const express=require('express');

const user=require('../model/cadastro')
const db=require('../model/conexao')



const callPeople=async(req, res)=>{

    const allPeole=await cliente("Doguinho-Ong")
    const {nome,email}=req.body
    const teste=(nome,email)
    console.log(teste)
    res.status(200).send(teste)
}


const cadastroUser=async(req,res)=>{
const {nome,email,telefone,senha,cep,logradouro,cidade,estado}=req.body
    console.log(nome,email,telefone,senha)
}

module.exports={
    callPeople,
    cadastroUser
}


