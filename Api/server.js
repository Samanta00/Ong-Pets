const app=require('./app')

const porta=3081 || process.env.porta


app.listen(porta,()=>{
    console.log('estou pegando, wee')
})