const 
    QUANTIDADEPERGUNTAS = 3,
    NIVELPERGUNTAS = 3,       
    TAMANHOMINIMO = 10,
    TAMANHOMAXIMO = 65;


let erradas = [];
const novoQuizz = {
    title: "",
    image: "",
    questions: [],
    levels: [],
};

function criarQuizz() {
    document.body.innerHTML += `
    <div class="novo-quizz">
        <section>
            <div class="titulo-formulario"><h2>Comece pelo começo</h2></div>
            <div class="questoes-formulario">
                <input class="inputs" type="text" id="titulo_quizz" placeholder="Título do seu quizz" required>
                <input class="inputs" type="text" id="url_imagem_quizz" placeholder="URL da imagem do seu quizz" required>
                <input class="inputs" type="number" id="qtde_pergunta_quizz" min="${QUANTIDADEPERGUNTAS}" placeholder="Quantidade de perguntas do quizz" required>
                <input class="inputs" type="number" id="qtde_nivel_quizz" min="${NIVELPERGUNTAS}" placeholder="Quantidade de níveis do quizz" required>
            </div>
            <button class="botao-formulario" onclick="validarPasso1()">Prosseguir pra criar perguntas</button>
        </section>  
    </div>`;
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

function exibirPerguntas(exibir) {
    exibir.parentElement.parentElement.children[1].classList.remove("ocultar");
}

function validarPasso2(questions) {
    for (let i = 0; i < questions; i++) {
        const respostaCorreta = {};

        const textoPergunta = document.getElementById(`perguntas_quizz_${i + 1}`).value.trim();
        const corPergunta = document.getElementById(`cor_quizz_${i + 1}`).value;
        const textoCorreta = document.getElementById(`resposta_ok_${i + 1}`).value.trim();
        const imagemCorreta = document.getElementById(`url_imagem_resposta_1_${i + 1}`).value;

        if (textoPergunta.length < TAMANHOMINIMO) {
            alert(`Texto da pergunta ${i + 1} muito curto.`);
            document.getElementById(`perguntas_quizz_${i + 1}`).focus();
            return;
        }

        if (!/^#[0-9A-Fa-f]{6}$/.test(corPergunta)) {
            alert("Cor inválida. Use formato hexadecimal como #00FF00.");
            document.getElementById(`cor_quizz_${i + 1}`).focus();
            return;
        }

        if (textoCorreta.length === 0) {
            alert("Resposta correta não pode estar vazia.");
            document.getElementById(`resposta_ok_${i + 1}`).focus();
            return;
        }

        if (!/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(imagemCorreta)) {
            alert("Imagem da resposta correta inválida.");
            document.getElementById(`url_imagem_resposta_1_${i + 1}`).focus();
            return;
        }

        respostaCorreta.text = textoCorreta;
        respostaCorreta.image = imagemCorreta;
        respostaCorreta.isCorrectAnswer = true;
        novoQuizz.questions[i].title = textoPergunta;
        novoQuizz.questions[i].color = corPergunta;
        novoQuizz.questions[i].answers.push(respostaCorreta);

        for (let j = 0; j < erradas[i]; j++) {
            const respostaIncorreta = {};
            const textoErrada = document.getElementById(`resposta_incorreta_${i}_${j}`).value.trim();
            const imagemErrada = document.getElementById(`url_imagem_resposta_${i}_${j}`).value;

            if (textoErrada.length === 0) {
                alert("Resposta incorreta não pode estar vazia.");
                document.getElementById(`resposta_incorreta_${i}_${j}`).focus();
                return;
            }

            if (!/\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(imagemErrada)) {
                alert("Imagem da resposta incorreta inválida.");
                document.getElementById(`url_imagem_resposta_${i}_${j}`).focus();
                return;
            }

            respostaIncorreta.text = textoErrada;
            respostaIncorreta.image = imagemErrada;
            respostaIncorreta.isCorrectAnswer = false;
            novoQuizz.questions[i].answers.push(respostaIncorreta);
        }
    }

  decidirNiveis();
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
        if (num < 0 && num > 100) {
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

        mostrarQuizz();
        console.log(objetoPostado);

    } catch (error) {
        alert("Algo deu errado: " + error.message);
        console.error(error);
    }

    console.log(objeto);
}



function mostrarQuizz() {
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
            <button class="reiniciar" onclick="selecionarQuizz(this,0)">Acessar Quizz</button>
            <button class="voltar" onclick="voltarParaHome()">Voltar para Home</button>
    </div>
</section>  
</div>
`;
    document.body.innerHTML += mostrar_quizz;
}

