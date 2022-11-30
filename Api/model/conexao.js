const mysql=require('mysql')
const Sequelize=require('sequelize')




     
        const sequelize=new Sequelize('cadastrodoguinho','ellen','ElS895623!',{
            host:'localhost',
            dialect:'mysql'
        })

        module.exports={
            //   Sequelize:Sequelize,  //o Sequelize com s maiusuclo recebe a biblioteca Sequelize
              sequelize    //o sequelize com s minusculo recebe o objeto que foi criado com a biblioteca
               }
        



    


