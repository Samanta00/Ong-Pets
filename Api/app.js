const express=require('express')
const cors=require('cors')
const peopleRotas=require('./routers/routers')
const conexao=require('./model/conexao')
const bodyParser=require('body-parser')


const app=express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin', '*')
//     // res.header('Access-Control-Allow-Origin', 'GET')
//     app.use(cors())
//     console.log('Acessou o Middleware!')
//     next()
// })
conexao.mysqlConection
app.use('/peoples', peopleRotas)


module.exports=app