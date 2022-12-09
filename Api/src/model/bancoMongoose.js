const mongoose=require('mongoose')
const uri='mongodb+srv://EllenSamanta:1234@doguinho-ong.wq4setl.mongodb.net/?retryWrites=true&w=majority'

const connect= async()=>{
    try{
        await mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnidefinedTopology:true
        })
        console.log('Banco COnectado')
    }
    catch(error){
        console.log(error)
    }
}

module.exports={connect}
