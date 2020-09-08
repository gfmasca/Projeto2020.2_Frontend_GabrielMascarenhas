// isso soh pode iniciar quando o request HTTP chegar
function carregaAções() {
    let botoes = document.querySelectorAll('.action');
    // o botoes eh o array de spans (que tem o contador e a imagem) e o botao eh uma span
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            if(!ehSpanComment(botao)) {
                if(mudaClasse(botao) == "agora está ativo") {
                    contador(botao, 'aumenta');
                } else {
                    contador(botao, 'diminui');
                }
            }else {
                // fazer comentario
                console.log("ehcomment");
            }
        })
    });
}

function contador(botao, metodo) {
    let contador = botao.querySelector('p');
    let numero = parseInt(contador.textContent);
    if (metodo == 'aumenta') {
        numero++;
    } else {
        numero--;
    }
    contador.textContent = numero;     
}

function ehSpanComment(botao) {
    for(let i = 0; i < botao.classList.length; i++) {
        if (botao.classList[i] == 'comments') {
            return true;
        }
    }
    return false;    
}

function mudaClasse(botao) {
    if (botao.classList[1] == "inativo") {
        botao.classList.remove('inativo');
        botao.classList.add('ativo');
        return "agora está ativo";
    } else {
        botao.classList.remove('ativo');
        botao.classList.add('inativo');
        return "agora está inativo";
    }
}
