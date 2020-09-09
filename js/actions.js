// isso soh pode iniciar quando o request HTTP chegar
function carregaAções(piu) {
    let botoes = piu.querySelectorAll('.action');
    // o botoes eh o array de spans (que tem o contador e a imagem) e o botao eh uma span    
    botoes.forEach(botao => {
        botao.addEventListener('click', function () {
            if (!procuraClasse(this, 'delete-piu')) {
                if (mudaAtivoInativo(this) == "agora está ativo") {
                    contadorDeAcao(this, 'aumenta');
                } else {
                    contadorDeAcao(this, 'diminui');
                }
            } else {
                this.parentNode.parentNode.classList.add('opacity0');
                setTimeout(() => {
                    this.parentNode.parentNode.classList.add('piu-invisivel');
                }, 500);
            }
        })
    });
}

function contadorDeAcao(botao, metodo) {
    let contador = botao.querySelector('p');
    let numero = parseInt(contador.textContent);
    if (metodo == 'aumenta') {
        numero++;
    } else {
        numero--;
    }
    contador.textContent = numero;
}

function procuraClasse(elemento, classe) {
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