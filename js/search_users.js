// CHAMADA DA FUNÇÃO ASSIM QUE A PÁGINA INICIAR
searchUsers();


function searchUsers() {
    let input = document.querySelector('#input-para-pesquisar-pius');
    input.addEventListener('input', function() {
        let pius = document.querySelectorAll('.piu');
        pius = Array.from(pius);
        if (this.value.length >= 0) {
            let piusVisiveis = pius.filter(piu => verificacao(piu, this.value));
            let piusInvisiveis = pius.filter(piu => !verificacao(piu, this.value));
            for (let piuInvisivel of piusInvisiveis) {
                piuInvisivel.classList.add('piu-invisivel');
            }
            for (let piuVisivel of piusVisiveis) {
                piuVisivel.classList.remove('piu-invisivel');
            }
        }
    });
}

function verificacao(piu, search) {
    let username = piu.querySelector('.username').textContent;
    // expressao regular
    let expressao = new RegExp(search, 'i');
    return expressao.test(username);
}