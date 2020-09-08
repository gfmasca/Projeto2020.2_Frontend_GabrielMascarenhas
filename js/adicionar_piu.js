let botaoDeAdicionarPiu=document.querySelector('#adicionar-piu');
botaoDeAdicionarPiu.addEventListener('click', function () {
    let divForm = document.querySelector('#campo-novo-piu');
    mudaClasse(divForm, 'invisible', 'visible');
    console.log('fui clicado');
});

let send = document.querySelector('#postar-piu');


// SÓ VAI CONSEGUIR MANDAR SE ESTIVER NO TAMANHO CERTO
send.addEventListener('click', function(event) {
    event.preventDefault();
    let form = document.querySelector('#form-novo-piu');
    let user = {
        mensagem: form.mensagem.value,
        username: "@masca",
        imagem: "/img/perfil.jpg"
    }
    postarPiu(user);
    form.reset();
});

function mudaClasse(elemento, antiga, nova) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
}

// 'xis' pra fechar a aba
let x = document.querySelector('#fechar-aba');

x.addEventListener('click', function() {
    let form = document.querySelector('#form-novo-piu');
    let divPostarPiu = document.querySelector('#campo-novo-piu');
    mudaClasse(divPostarPiu, 'visible', 'invisible');
    form.reset();
});


// FALTA VALIDAR OS PIUS
function validaPiu (){
    let branco = false;
// pq isso nao ta dando certo?
    let form = document.querySelector('#form-novo-piu');
    let mensagem = document.querySelector('#mensagem-novo-piu')
    mensagem.addEventListener('input', function() {
        let contador = mensagem.value;
        console.log(contador);
        
    });
    
}

