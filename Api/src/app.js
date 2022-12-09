const express=require('express')
const cors=require('cors')
const app = express()


const peopleRotas=require('./routers/routers')

const databaseConect=require('./model/conexao')
const bodyParser=require('body-parser')
const databaseMongoose=require('../src/model/bancoMongoose')

app.use(cors())

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin', '*')
//     // res.header('Access-Control-Allow-Origin', 'GET')
//     app.use(cors())
//     console.log('Acessou o Middleware!')
//     next()
// })

app.use('/peoples', peopleRotas)


app.get('/', (req,res)=>{
      res.status(200).send('Bem vindo(a) a Ong 4 patas')
  
})
// databaseConect.mysqlConection
databaseMongoose.connect()

module.exports=app