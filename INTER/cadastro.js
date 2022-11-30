fetch('http://localhost:3081/peoples/Doguinho-Ong/cadastros').then((response)=>{
    response.json().then((data)=>{
        // console.log(data)
        let dadosBanco=data
       
        validandoLogin(email,senha,dadosBanco)
        
    })
})

const botao=document.getElementById('botao-cadastro')

botao.addEventListener('click',function(event){
    event.preventDefault()
    let form=document.querySelector('.formulario-cadastro-user')
    let nome=form.nome.value;
    let email=form.email.value;
    let telefone=form.telefone.value;
    let senha=form.senha.value;
    let cep=form.cep.value;
    let logradouro=form.logradouro.value;
    let cidade=form.cidade.value;
    let estado=form.estado.value;

    console.log(nome,email,telefone,senha,cep,logradouro,cidade,estado)

        
})