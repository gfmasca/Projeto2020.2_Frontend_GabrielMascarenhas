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
    let divActions = montarActions();

    let profilePicture = createImgElement(['profile-picture'], "imagem de perfil", user.imagem.split(".jpg")[0] + "s.jpg");

    let username = document.createElement('h3');
    username.textContent = user.username;
    
    let mensagem = document.createElement('p');
    mensagem.textContent = user.mensagem;

    let divSuporte = document.createElement('div');
    let divParaOTexto = document.createElement('div');

    // adicionando as classes
    divSuporte.classList.add('suporte');
    divParaOTexto.classList.add('texto-do-piu');
    username.classList.add('username');

    divParaOTexto.appendChild(username);
    divParaOTexto.appendChild(mensagem);

    divSuporte.appendChild(profilePicture);
    divSuporte.appendChild(divParaOTexto);
    
    piu.appendChild(divSuporte);
    piu.appendChild(divActions);
    carregaAções(piu);
    return piu;

}

function createImgElement(classList, alt, src) {
    var img = document.createElement("img");
    classList.forEach(function(classItem){
        img.classList.add(classItem);
    });
    img.alt = alt;
    img.src = src;
    return img;
}

function montarActions() {

    let imagensSrc = [
        "img/like.svg",
        "img/bookmark.svg",
        "img/x-mark.svg"
    ]
    let imagensAlt = [
        "botão de like",
        "botão para salvar o piu",
        "botão para deletar piu do seu feed"
    ]
    let divActions = document.createElement('div');
    divActions.classList.add('actions');

    for (let i = 0; i < imagensAlt.length; i++) {
        let span = document.createElement('span');
        if (i != 2) {
            span.classList.add('action')
            span.classList.add('inativo')
            let paragrafo = document.createElement('p');
            paragrafo.textContent = 0;
            span.appendChild(paragrafo);
        } else {
            span.classList.add('action');
            span.classList.add('delete-piu');
        }


        let imagem = createImgElement(['icone-action'], imagensAlt[i], imagensSrc[i]);

        span.appendChild(imagem);
        divActions.appendChild(span);
    }
    return divActions;
}




