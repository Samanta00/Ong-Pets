const { response } = require('../app')
const banco=require('../model/banco')


const allPets=async(req,res)=>{
    const bancoPets=await banco.petsEstimacao("pets-Banco")
    res.status(200).json(bancoPets)
}

















const findPet=async(req,res)=>{
    const {tipo}=req.body
    const  allPets = await banco.petsEstimacao("pets-Banco")

   try{
    if (!tipo || tipo.trim() === "") {
        return response.status(400).send({ message: `O Campo é obrigatorio` })
      }

    if(tipo==='cachorro'|| tipo==='gato'){
            const filtrandoPets=allPets.filter(tiposPets=>tiposPets.tipo==tipo.toLowerCase())
            console.log(filtrandoPets)
            res.status(200).json(filtrandoPets)
    }
    else{
                res.status(400).send(`Desculpe, este animal não pode ser encontrado em nossos abrigos, 
                             apenas temos disponíveis para adoção gatos e cachorros`)
    }
   }
   catch(error){
       res.status(500).json(`Poxa ocorreu algum erro :(  Message:${error}`)
   }
}

const adicionarPet=async(req,res)=>{
    const {nome,raca,sexo,peso,doente,deficiente,idade,tipo,Adotado}=req.body
    const  allPets = await banco.petsEstimacao("pets-Banco")
    try{
        if(Adotado==true){
            res.status(400).json('Este pet já foi adotado, não se enquadra para novos animais para a adoção')
        }
        if(Adotado==false){
        const cadastroPet={
        id:allPets.length,
        nome:nome,
        raca:raca,
        sexo:sexo,
        peso:peso,
        doente:doente,
        deficiente:deficiente,
        idade:idade,
        tipo:tipo,
        Adotado:Adotado
        }
        allPets.push(cadastroPet)
        res.status(201).send(allPets)
        }
        else{
            res.status(404).json({message:'Algum erro Não específico foi encontrado'})
        }
    }
    catch(error){
        res.status(500).json({message:error})
    }
}


const updtateAllcaracter=async(req,res)=>{
 const { id } = req.params
 const allPets = await banco.petsEstimacao("pets-Banco")
 const findPet=allPets.find(pet=>pet.id==id)

 const {nome,raca,sexo,peso,doente,deficiente,idade,tipo}=req.body
 if (!findPet) {
    return res.status(404).send({ 
         message: `O Pet não foi encontrado para o Código: ${id}`
    })
  }
 if (typeof nome != "string" || nome.trim() == "" || typeof raca != "string" || raca.trim() == "" 
   ||typeof sexo != "string" || sexo.trim() == ""  ||typeof doente != "boolean" || typeof idade == "string"
   || typeof tipo != "string" || tipo.trim() == "" ||typeof deficiente != "boolean" ||typeof peso == "string" 
) {

     return res.status(400).send({ 
    message: "Nenhum Dados deve ser passado errado ou vázio"
        })
}

 

  if (nome,raca,sexo,peso,doente,deficiente,idade,tipo) {
      findPet.nome = nome, findPet.raca=raca, findPet.sexo=sexo, findPet.peso=peso, findPet.doente=doente, findPet.deficiente=deficiente,
      findPet.idade=idade, findPet.tipo=tipo
  }
  res.status(200).send(findPet)
 
}

const updateSomeCaracter=async(req,res)=>{
    const {id}=req.params
    const allPets = await banco.petsEstimacao("pets-Banco")
    const findPet=allPets.find(pet=>pet.id==id)
    const {id:idDeletado, ...dadosPet}=req.body

    if (!findPet || findPet == undefined) {
        return res.status(404).send({ 
             message: `O Pet não foi encontrado para o Código: ${id}`
        })
    }
    const chaves=Object.keys(findPet)

    chaves.forEach(chave=>{
        let dadosAtualizados=dadosPet[chave]
        if(dadosAtualizados)findPet[chave]=dadosAtualizados
    } )
    
   res.status(200).send(findPet)
}


const deletarPet=async(req,res)=>{
    const { id } = req.params
    const allPets = await banco.petsEstimacao("pets-Banco")
    const findPet=allPets.findIndex(pet=>pet.id==id)


    if (findPet === -1) {
        return res.status(404).send(
         { message: `O Pet não foi encontrado para o Código: ${id}`}
         )
      }
      allPets.splice(findPet, 1)

      res.status(200).send({
       message: "O pet foi deletado com sucesso da lista de pets registrados pela ong!"
      })

}

module.exports={allPets, findPet, adicionarPet, deletarPet, updtateAllcaracter, updateSomeCaracter}