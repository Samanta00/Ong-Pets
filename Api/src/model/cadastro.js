const db=require('./conexao')
const Sequelize=require('sequelize')

const User=db.sequelize.define("user",

 {
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING
    },
    telefone:{
        type:Sequelize.STRING
    },
    senha:{
        type:Sequelize.STRING
    },
    cep:{
        type:Sequelize.STRING
    },
    logradouro:{
        type:Sequelize.STRING
    },
    cidade:{
        type:Sequelize.STRING
    },
    estado:{
        type:Sequelize.STRING
    }
})
//user.sync()
module.exports=User
