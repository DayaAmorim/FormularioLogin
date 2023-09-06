let email = document.getElementById('email');
let senha = document.getElementById('senha');

//Criando eventos dos botões
document.getElementById('botaoLogin')
.addEventListener('click', (e)=> {
    e.preventDefault();
    window.open('../login.html');
    window.close();

}
);

document.getElementById('botaoCad')
.addEventListener('click', (e)=>{
    e.preventDefault();
    if (email.value !== '' || senha.value !==''){
        cadastro()

    }else{
        alert('Prencha o e-mail e a senha');
        email.focus();
    }
});


//Criando CRUD no Storage

//Create - Cadastrar 

function cadastro(){
    let email = document.getElementById('email');
    let senha = document.getElementById('senha')
    let usuarios = new Array();

//Verificando se existe USUARIOS no Storage
if(localStorage.hasOwnProperty('usuarios')){
    //Recuperar os valores da chave Usuarios
    //Convertendo a chave USUARIOS e, objeto
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}

//adicionar um novo usuario no Storage

email = email.value;
senha = senha.value;
usuarios.push({email,senha}); //Usando parenteses e chaves dessa forma estou informando que é um objeto. Uma matriz chamada USUARIOS com duas colunas, email e senha.

//convertendo para String
localStorage.setItem('usuarios',JSON.stringify(usuarios))

alert('Usuário cadastrado com sucesso!')

document.getElementById('email').value = '';
document.getElementById('senha').value = '';
document.getElementById('email').focus()

}


