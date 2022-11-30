const cliente=require('../model/banco.js');
const express=require('express');

const user=require('../model/cadastro')
const db=require('../model/conexao')



const callPeople=async(request, response)=>{

    const allPeole=await cliente("Doguinho-Ong")

    response.status(200).send(allPeole)
}


const cadastroUser=async(request,response)=>{
    const {nome,email,telefone,senha,cep,logradouro,cidade,estado}=request.body
    console.log('entrei')
    
    const novoUser=await user.create({
        nome:nome,
        email:email,
        telefone:telefone,
        senha:senha,
        cep:cep,
        logradouro:logradouro,
        cidade:cidade,
        estado:estado
    }).then(
        function(){
            response.status(200).send('Foi realizado com sucesso')
        }
    ).catch(
        function(error){
            response.status(500).send({message:error})
        }
    )
}



module.exports={
    callPeople,
    cadastroUser
}


