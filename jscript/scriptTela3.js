let erradas = [];
function validarTexto(input, min, max, campo) {
    const value = input.value.trim();
    if (value.length < min || value.length > max) {
        alert(`${campo} deve ter entre ${min} e ${max} caracteres.`);
        input.focus();
        return false;
    }
    return true;
}

function validarImagem(input, campo) {
    const value = input.value.trim();
    if (!/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(value)) {
        alert(`${campo} deve ser uma URL de imagem válida (ex: .jpg, .jpeg, .png).`);
        input.focus();
        return false;
    }
    return true;
}

function validarPorcentagem(input, campo) {
    const value = parseInt(input.value);
    if (isNaN(value) || value < 0 || value > 100) {
        alert(`${campo} deve ser um número entre 0 e 100.`);
        input.focus();
        return false;
    }
    return true;
}

function validarPasso1() {
    const title = document.getElementById("titulo_quizz");
    const image = document.getElementById("url_imagem_quizz");
    const questions = document.getElementById("qtde_pergunta_quizz");
    const levels = document.getElementById("qtde_nivel_quizz");

    if (title.value.length < TAMANHOMINIMO || title.value.length > TAMANHOMAXIMO) {
        alert("Título do quizz inválido. Deve ter entre 10 e 65 caracteres.");
        title.focus();
        return;
    }

    if (!/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(image.value)) {
        alert("Endereço de imagem inválido. Deve terminar com uma extensão de imagem.");
        image.focus();
        return;
    }

    let qtdPerguntas = parseInt(questions.value);
    if (qtdPerguntas < QUANTIDADEPERGUNTAS) {
        alert(`A quantidade de perguntas deve ser no mínimo ${QUANTIDADEPERGUNTAS}.`);
        questions.value = QUANTIDADEPERGUNTAS;
        questions.focus();
        return;
    }

    const qtdNiveis = parseInt(levels.value);
    if (qtdNiveis < NIVELPERGUNTAS) {
        alert(`A quantidade de níveis deve ser no mínimo ${NIVELPERGUNTAS}.`);
        levels.value = NIVELPERGUNTAS;
        levels.focus();
        return;
    }

    novoQuizz.title = title.value;
    novoQuizz.image = image.value;
    novoQuizz.questions = Array.from({ length: qtdPerguntas }, () => ({
        title: "",
        color: "",
        answers: []
    }));
    novoQuizz.levels = Array.from({ length: qtdNiveis }, () => ({
        title: "",
        image: "",
        text: "",
        minValue: 0
    }));

    qtde_niveis = qtdNiveis;

    document.querySelector(".novo-quizz").style.display = "none";

    criarPerguntas(qtdPerguntas);
}

function exibirPerguntas(exibir) {
    exibir.parentElement.parentElement.children[1].classList.remove("ocultar");
}

function validarPasso2(questions) {
    for (let i = 0; i < questions; i++) {
        const textoPergunta = document.getElementById(`perguntas_quizz_${i + 1}`);
        const corPergunta = document.getElementById(`cor_quizz_${i + 1}`);
        const textoCorreta = document.getElementById(`resposta_ok_${i + 1}`);
        const imagemCorreta = document.getElementById(`url_imagem_resposta_1_${i + 1}`);

        // Valida o texto da pergunta
        if (!validarTexto(textoPergunta, TAMANHOMINIMO, TAMANHOMAXIMO, `Texto da pergunta ${i + 1}`)) return;

        // Valida a cor da pergunta
        if (!/^#[0-9A-Fa-f]{6}$/.test(corPergunta.value)) {
            alert("Cor inválida. Use formato hexadecimal como #00FF00.");
            corPergunta.focus();
            return;
        }

        // Valida a resposta correta
        if (!validarTexto(textoCorreta, 1, 100, `Resposta correta ${i + 1}`)) return;
        if (!validarImagem(imagemCorreta, `Imagem da resposta correta ${i + 1}`)) return;

        // Adiciona a resposta correta
        const respostaCorreta = {
            text: textoCorreta.value.trim(),
            image: imagemCorreta.value.trim(),
            isCorrectAnswer: true
        };
        novoQuizz.questions[i].title = textoPergunta.value.trim();
        novoQuizz.questions[i].color = corPergunta.value.trim();
        novoQuizz.questions[i].answers.push(respostaCorreta);

        // Valida as respostas incorretas
        for (let j = 0; j < erradas[i]; j++) {
            const respostaIncorreta = document.getElementById(`resposta_incorreta_${i}_${j}`);
            const imagemErrada = document.getElementById(`url_imagem_resposta_${i}_${j}`);
            
            if (!validarTexto(respostaIncorreta, 1, 100, `Resposta incorreta ${j + 1}`)) return;
            if (!validarImagem(imagemErrada, `Imagem da resposta incorreta ${j + 1}`)) return;

            // Adiciona a resposta incorreta
            novoQuizz.questions[i].answers.push({
                text: respostaIncorreta.value.trim(),
                image: imagemErrada.value.trim(),
                isCorrectAnswer: false
            });
        }
    }

    decidirNiveis();
}

function criarPerguntas(qtde) {
    
    let montarQuestoes = `<div class="criar-perguntas"><section>
        <div class="titulo-formulario"><h2>Crie Suas Perguntas</h2></div>
        <div class="questoes-formulario">`;

    for (let i = 0; i < qtde; i++) {
        montarQuestoes += `
            <div class="perguntas"> 
                <span class="subtitulo-formulario editor">
                    <h5>Pergunta N${i + 1}</h5>`;

        if (i > 0) {
            montarQuestoes += `<ion-icon name="create-outline" onclick="exibirPerguntas(this)"></ion-icon></span><div class="ocultar">`;
        } else {
            montarQuestoes += `</span><div>`;
        }

        montarQuestoes += `
            <input class="inputs" type="text" id="perguntas_quizz_${i + 1}" placeholder="Texto da pergunta" required>
            <input class="inputs" type="text" id="cor_quizz_${i + 1}" placeholder="Cor de Fundo da pergunta" required>
            <span class="subtitulo-formulario"><h5>Resposta correta</h5></span>
            <div class="alternativa-true">       
                <input class="inputs" type="text" id="resposta_ok_${i + 1}" placeholder="Resposta correta" required>
                <input class="inputs" type="text" id="url_imagem_resposta_1_${i + 1}" placeholder="URL da imagem" required>
            </div>
            <span class="subtitulo-formulario"><h5>Respostas incorretas</h5></span>`;

        let qtdErradas = parseInt(prompt(`Quantas respostas erradas para a pergunta ${i + 1}? (1 a 3)`));
        if (isNaN(qtdErradas) || qtdErradas < 1 || qtdErradas > 3) {
            alert("Quantidade inválida. Informe entre 1 e 3.");
            return;
        }

        erradas[i] = qtdErradas;

        for (let j = 0; j < qtdErradas; j++) {
            montarQuestoes += `
            <div class="alternativa-false">
                <input class="inputs" type="text" id="resposta_incorreta_${i}_${j}" placeholder="Resposta incorreta ${j + 1}" required>
                <input class="inputs" type="text" id="url_imagem_resposta_${i}_${j}" placeholder="URL da imagem ${j + 1}" required>
            </div>`;
        }

        montarQuestoes += `</div></div>`;
    }

    montarQuestoes += `</div>
        <button class="botao-formulario" onclick="validarPasso2(${qtde})">Prosseguir para criar níveis</button>
    </section></div>`;

    document.body.innerHTML += montarQuestoes;
}

function decidirNiveis() {
    document.querySelector(".criar-perguntas").style.display = "none";

    let montarNiveis = `
    <div  class="decidir-niveis">
        <section>
            <div class="titulo-formulario"><h2>Agora, decida os níveis!</h2></div>
            <div class="questoes-formulario">`;
    for (let i = 0; i < qtde_niveis; i++) {


        montarNiveis += `
                <div class="perguntas">
                                <span class="subtitulo-formulario" > 
                                            <h5>Nivel ${(i + 1)}</h5>`;

        if (i > 0) {

            montarNiveis += `
                        <ion-icon name="create-outline" onclick="exibirPerguntas(this)"></ion-icon></span>
                        <div class="ocultar">`;
        } else {
            montarNiveis += `</span>
                    <div>`;
        }

        montarNiveis += `
            
                <input class="inputs" type="text" id="tx_titulo_nivel_${i + 1}" placeholder="Titulo do Nivel" required>

                <input class="inputs" type="text" id="porcentagem_acerto_${i + 1}"placeholder="Porcentagem de acerto mínima" required>

                <input class="inputs" type="text" id="url_imagem_nivel_${i + 1}" placeholder="Url da imagem do nível" required>

                <textarea class=" inputs inputs-txt" type="text" id="tx_textarea_nivel_${i + 1}" placeholder="Descrição do nível" required></textarea>

                
                </div>
                </div>`;


    };
    montarNiveis += `</div>
                     <button class="botao-formulario" onclick="finalizaQuizz(${qtde_niveis})">Finalizar Quizz</button>`;

    montarNiveis += `</section>
            </div>`;

    document.body.innerHTML += montarNiveis;
}

function finalizaQuizz(qtde) {
    for (let i = 0; i < qtde; i++) {
              
        if (document.getElementById("tx_titulo_nivel_" + (i + 1)).value.length < 10) {
            alert("Seu titulo de nível " + (i + 1) + " não foi preenchido corretamente");
            document.getElementById("tx_titulo_nivel_" + (i + 1)).focus();
            return;
        } else {
            novoQuizz.levels[i].title = document.getElementById("tx_titulo_nivel_" + (i + 1)).value;
        }

        num = document.getElementById("porcentagem_acerto_" + (i + 1)).value;
        if (num < 0 || num > 100) {
            alert("Esse valor não foi preenchido corretamente");
            document.getElementById("porcentagem_acerto_" + (i + 1)).focus();
            return;
        } else {
            novoQuizz.levels[i].minValue = document.getElementById("porcentagem_acerto_" + (i + 1)).value;
        }


        if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(document.getElementById("url_imagem_nivel_" + (i + 1)).value) == false) {
            alert("Endereço de imagem invalido");
            document.getElementById("url_imagem_nivel_" + (i + 1)).focus();
            return;
        } else {
            novoQuizz.levels[i].image = document.getElementById("url_imagem_nivel_" + (i + 1)).value;
        }

        if (document.getElementById("tx_textarea_nivel_" + (i + 1)).value.length < 30) {
            alert("Seu titulo de nível " + (i + 1) + " não foi preenchido corretamente");
            document.getElementById("tx_textarea_nivel_" + (i + 1)).focus();
            return;
        } else {
            novoQuizz.levels[i].text = document.getElementById("tx_textarea_nivel_" + (i + 1)).value;
        }

    }
    enviarQuizz(novoQuizz);

}


async function enviarQuizz(objeto) {
    document.querySelector(".decidir-niveis").style.display = "none";

    try {
        const resposta = await fetch('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        });

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const objetoPostado = await resposta.json();
        idsDoUsuario.push(objetoPostado.id);

        mostrarQuizz(objetoPostado);
       

    } catch (error) {
        alert("Algo deu errado: " + error.message);
        console.error(error);
    }

    console.log(objeto);
}


function mostrarQuizz(objetoPostado) {
    let mostrar_quizz = `
    <div class="quizz-pronto">
<section>
    <div class="titulo-formulario"><h2>Seu quizz está Pronto!</h2>
    </div>
        
    <div class="questoes-formulario">
        <div class="quizz-item" onclick="selecionarQuizz(this,0)" style="background-image: 
            linear-gradient( 180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%),
             url('${novoQuizz.image}')">
                <span class="titulo-quizzes">
                        <h3>${novoQuizz.title}</h3>
                </span>
        </div>
    </div>

    <div class="botao">
            <button class="reiniciar" onclick="exibirQuiz(${objetoPostado})">Acessar Quizz</button>
            <button class="voltar" onclick="voltarParaHome()">Voltar para Home</button>
    </div>
</section>  
</div>
`;
    document.body.innerHTML += mostrar_quizz;
}

function exibirQuiz(objetoPostado) {
    let montarQuizz = ''; // Inicializa a string que vai conter o HTML das perguntas e respostas
    
    // Percorre todas as perguntas do quiz
    for (let i = 0; i < objetoPostado.questions.length; i++) {
        montarQuizz += `<div class="jogo">
                            <div class="unico-jogo">
                                <span class="titulo-quizz" 
                                    style="background-color: ${objetoPostado.questions[i].color}">
                                    <h3>${objetoPostado.questions[i].title}</h3>
                                </span>
                                <div class="perguntas">`;

        // Pega as respostas da pergunta
        let answers = objetoPostado.questions[i].answers;
        
        // Embaralha as respostas (como você faz com o comparador)
        answers.sort(comparador);

        // Para cada resposta, cria a estrutura HTML correspondente
        answers.forEach(answer => {
            let valor = answer.isCorrectAnswer ? 1 : 0; // Se a resposta for correta, valor = 1, senão, 0
            montarQuizz += `<div class="escolher-resposta `;

            // Se a resposta for correta, adiciona a classe "alternativa-true", caso contrário "alternativa-false"
            if (answer.isCorrectAnswer) {
                montarQuizz += ` alternativa-true mascara `;
            } else {
                montarQuizz += ` alternativa-false mascara `;
            }

            // Adiciona o HTML da resposta
            montarQuizz += `" onclick="selectAnswer(this,${valor},${i})">
                                <img src="${answer.image}" alt="Imagem da resposta">
                                <span class="texto-resposta"><h4>${answer.text}</h4></span>
                            </div>`;
        });

        // Fecha os divs das perguntas e jogo
        montarQuizz += `         </div>
                            </div>
                        </div>`;
    }

    // Adiciona o HTML gerado ao container que vai exibir o quizz
    document.querySelector(".todos-games").innerHTML = montarQuizz;
}
