const bancos=require('../model/banco')
const express=require('express');

const User=require('../model/cadastro')
const db=require('../model/conexao')



const callPeople=async(req, res)=>{

    let allPeole=await bancos.cliente("Doguinho-Ong")
    const teste=req.body
    console.log(teste)

    try {
       if(allPeole==undefined){
           res.status(400).send('Houve alguma falha nas buscas aos usuários')
       }
       else{
            res.status(200).json(allPeole)
       }
      }
      catch(error){
        res.status(500).send(error)
      }   
    // const {nome,email}=req.body
    // const teste=(nome,email)
    // console.log(teste)

   // res.status(200).json(allPeole)
}


const cadastroUser=async(req,res)=>{
  

      const { nome,email,telefone,senha,cep,logradouro,cidade,estado}=req.body

  console.log(nome)
     const enviando= await User.create(req.body)
   
//      const nomeExiste = enviando.some(pessoa => pessoa.email === email)
// console.log(nomeExiste)
      // if (nomeExiste === true) {
      //   return response.status(409).send({ message: `O Emaik ${email} já está associado á uma conta`})
      // }
      // if (!nome || nome.trim() === ""|| !email || email.trim() === ""||!telefone || telefone.trim() === "" || !senha || senha.trim() === ""||
      //     !cep || cep.trim() === ""  || !logradouro || logradouro.trim() === ""  || !cidade || cidade.trim() === ""  ||!estado || estado.trim() === "") {
      //   return response.status(400).send({ message: `Todos os Dados são obrigatórios o Preenchimento` })
      // }
      
      try{
      then(()=>{
        return res.json({
            erro:false,
            mensagem:"usuário cadastrado com sucesso"
        })
      }).catch(()=>{
          res.status(400).send('erro ao enviar cadastro no banco de dados')
      })
      }
      catch(error){
        res.status(500).json(error)
      }

    
}





module.exports={
    callPeople,
    cadastroUser,

   
}


