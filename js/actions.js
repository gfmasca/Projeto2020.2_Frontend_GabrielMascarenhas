// isso soh pode iniciar quando o request HTTP chegar
function carregaAções() {
    let botoes = document.querySelectorAll('.action');
    // o botoes eh o array de spans (que tem o contador e a imagem) e o botao eh uma span
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            if(!procuraClasse(botao, 'comments')) {
                if(mudaAtivoInativo(botao) == "agora está ativo") {
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

function procuraClasse (elemento, classe) {
    for (let i = 0; i < elemento.classList.length; i++) {
        if (elemento.classList[i] == classe) {
            return true;
        }
    }
    return false
}

function mudaAtivoInativo(botao) {
    if (procuraClasse(botao, 'inativo')) {
        mudaClasse(botao, 'inativo', 'ativo');
        return "agora está ativo";
    } else {
        mudaClasse(botao, 'ativo', 'inativo');
        return "agora está inativo";
    }
}
