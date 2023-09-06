/* CRIANDO EVENTO DO BOTÃO */

document.getElementById('botaoEntrar')
        .addEventListener('click',(e)=>{
            e.preventDefault();  //ESTE METODO IMPEDE QUE A PAGINA ATUALIZE 
        });

document.getElementById('botaoCadastro')
.addEventListener('click', (e) =>{
    e.preventDefault();
    window.open("../assets/cadastroUsuario.html")
});        


function verifica(){
    //pegando os valores do input email

   let email =  document.getElementById('usernmae').value;
   let senha = document.getElementById('password').value;

   if(email == '' || senha ==''){
    alert('Obrigatorio o preenchimento do email e senha.')
    document.getElementById('username').focus();

   }else{
    consultar(email, senha);
   };

};

function consultar(email,senha){
    let usuarios = new Array();  //Aqui estamos definindo uma matriz

    //Verificando se a chave a chave usuarios existe no local storoge
    if(localStorage.hasOwnProperty("usuarios")){

    // Este método está dizendo para procurar uma chave dentro do local storage
    //Recuperar os valores da propriedade usuarios do localStorage
    //Convertendo o USUARIOS em objeto para podermos usar as propriedades 

    usuarios = JSON.parse(localStorage.getItem('usuarios'))
}

for(let i = 0;i<usuarios.length;i++){
    if(usuarios[i].email==email && usuarios[i].senha==senha){
    window.open("../assets/index.html");
    window.close();
    break;
};

};

alert('Email ou senha inválido');
document.getElementById('username').focus()


}

