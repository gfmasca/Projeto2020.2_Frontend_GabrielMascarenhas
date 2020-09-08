carregaOsPius();

function carregaOsPius() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://next.json-generator.com/api/json/get/EkyZfHLU_');

    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            let pius = JSON.parse(xhr.responseText);
            pius.forEach(user => {
                postarPiu(user);
            });
        } else {
            console.log('Falha ao carregar a página');
            console.log(xhr.responseText);
            console.log(xhr.status);            
        }
    })

    xhr.send();
}

function postarPiu (user) {
    let listaDePius = document.querySelector('#lista-de-pius');
    let piu = document.createElement('li');
    piu.classList.add('piu');

    listaDePius.appendChild(montarPiu(user, piu));
}

function montarPiu(user, piu) {
    let profilePicture = user.imagem;
    
    let username = document.createElement('h3');
    username.textContent = user.username;
    
    let mensagem = document.createElement('p');
    mensagem.textContent = user.mensagem;

    let actions = document.querySelector('.actions');
    
    let divSuporte = document.createElement('div');
    let divParaOTexto = document.createElement('div');

    // adicionando as classes
    divSuporte.classList.add('suporte');
    divParaOTexto.classList.add('texto-do-piu');

    // como cria tag img ?

    divParaOTexto.appendChild(username);
    divParaOTexto.appendChild(mensagem);
    divSuporte.appendChild(divParaOTexto);
    piu.appendChild(divSuporte);
    
    return piu;

}




