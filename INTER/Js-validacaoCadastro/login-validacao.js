


let botao=document.querySelector('.botao')

// form.addEventListener("submit", enterLogin)



botao.addEventListener('click', function (event){
    event.preventDefault()
    let form=document.querySelector('.formulario')
    
    let email=form.email.value
    let senha=form.password.value
    // console.log(email)
    // console.log(senha)

    fetch('http://localhost:3081/peoples/Doguinho-Ong/cadastros').then((response)=>{
        response.json().then((data)=>{
            // console.log(data)
            let dadosBanco=data
           
            validandoLogin(email,senha,dadosBanco)
            
        })
    })
    

})


async function validandoLogin(Uemail,Usenha,dadosBanco){
    let valores=await dadosBanco


    
    let senhaUser=Usenha;
    let emailUser=Uemail;

    dadosBanco.filter(element => {
    
        if(emailUser==element.email && senhaUser==element.senha){
            encaminhamento('acessou')
        }
        else{
            console.log('não deu certo :( ')
            // window.alert('alguma informação foi passada errada')
        }
       
    });
    
 

}

function encaminhamento(permisao){
    if (permisao=='acessou'){
        console.log('parabens')

       
        var URL='http://127.0.0.1:5501/INTER/adote.html' 
        const win= window.open(URL, '_blank')
        win.focus
        
       
    }
    else{
        console.log('não pode entrar')
    }

}
// function enterLogin(event){

//     event.preventDefault()
  
//     // let botao=document.getElementsByClassName('botao').addEventListener('click', console.log('olaa'))
    
//     fetch('http://localhost:3081/peoples/Doguinho-Ong/cadastros').then((response)=>{
//         response.json().then((data)=>{
//             console.log(data)
//             let valoresApi=data
            
            
//         })
//     })
// }

