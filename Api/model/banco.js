const mysql=require('mysql')


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
module.exports=cliente



