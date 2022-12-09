const mysql=require('mysql')

//banco simulação de clientes
const cliente = (emailCliente)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(emailCliente==='Doguinho-Ong'){
                return resolve(require('./arquivos.json'))
            }
            return reject(new Error('Nobody was find'))
        },1500);
    })
}




//banco simulação de pets
const petsEstimacao = (petDatabase)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(petDatabase==='pets-Banco'){
                return resolve(require('./pets.json'))
            }
            return reject(new Error('Nobody was find'))
        },1500);
    })
}
module.exports={cliente, petsEstimacao}
