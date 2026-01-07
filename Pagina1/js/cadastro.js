window.addEventListener("DOMContentLoaded", function(){


const user = document.getElementById("user");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const btnCadastro = document.getElementById("btnCadastro");

const CHAVE = "usuarios";

function cadastrarUser(newUser) {
        const usuarios = JSON.parse(localStorage.getItem(CHAVE)) || [];
        
        const existe = usuarios.some(u => u.email === newUser.email);

        if (existe) {
            alert("Email já cadastrado")

            return false;
        }

        usuarios.push(newUser);
        localStorage.setItem(CHAVE, JSON.stringify(usuarios));

        alert("Usuário cadastrado com sucesso");
        return true;
    }

if (btnCadastro) {
    btnCadastro.addEventListener("click", function (){

    if(user.value.trim() == "" || 
       email.value.trim() == "" || 
       senha.value.trim() == "" ){
       alert("Erro ao Preencher os Campos");
        return ;
    }

    const sucesso = cadastrarUser({
        nome : user.value,
        email: email.value,
        senha: senha.value
    });

    if (sucesso){
        window.location.href = "Camisas/index.html"
    }

});
}





    
});