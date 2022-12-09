const app=require('./src/app')

const porta=3080 || process.env.porta


app.listen(porta,()=>{
    console.log('estou pegando, wee')
})