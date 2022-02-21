const QUANTIDADEPERGUNTAS = 3,
    TAMANHOMINIMO = 20,
    TAMANHOMAXIMO = 65;
let qtde_niveis;
const novoQuizz = {
    title: null,
    image: null,
    questions: [],
    levels: [],
};

let erradas = [];

function criarQuizz() {

    document.body.innerHTML += `<div  class="novo-quizz">
    <section>
            <div class="titulo-formulario"><h2>Comece pelo começo</h2></div>
            
                <div class="questoes-formulario">

                    <input class="inputs" type="text" id="titulo_quizz" placeholder="Titulo do seu quizz" required>

                    <input class="inputs" type="text" id="url_imagem_quizz" placeholder="URL da imagem do seu quizz" required>

                    <input class="inputs" type="number" id="qtde_pergunta_quizz" min="3" placeholder="Quantidade de perguntas do quizz" required>

                    <input class="inputs" type="number" id="qtde_nivel_quizz" min="2" placeholder="Quantidade de níveis do quizz" required>
                    
                </div>
                <button class="botao-formulario" onclick="validarPasso1()">Prosseguir pra criar perguntas</button>
      </section>  
    </div>`;
}

function validarPasso1() {

    let titulo = document.getElementById("titulo_quizz");
    let url_imagem = document.getElementById("url_imagem_quizz");
    let qtde_pergunta = document.getElementById("qtde_pergunta_quizz");
    let nivel = document.getElementById("qtde_nivel_quizz");

    /*Para realizar valido de passo 1 */
    titulo.value = "Nayane Thalyta e Bartolomeu";
    url_imagem.value = "https://upload.wikimedia.org/wikipedia/pt/a/ac/Vegeta.jpg";
    qtde_pergunta.value = Number(3);
    nivel.value = Number(2);


    if (titulo.value.length < TAMANHOMINIMO || titulo.value.length > TAMANHOMAXIMO) {
        alert("O Titulo de quizz Invalido tente novamente");
        titulo.value = "";
        titulo.focus();
        return;
    }

    if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url_imagem.value) == false) {
        alert("Endereço de imagem invalido");
        url_imagem.focus();
        return;
    }

    if (qtde_pergunta.value < QUANTIDADEPERGUNTAS) {
        alert("A quantidade de pergunta deve ser no mínimo 3!!");
        qtde_pergunta.value = 3;
        qtde_pergunta.focus();
        return;
    }

    if (nivel.value < 2) {
        alert("A quantidade de níveis deve ser no mínimo 2!!");
        nivel.value = 2;
        nivel.focus();
        return;
    }

    novoQuizz.title = titulo.value;
    novoQuizz.image = url_imagem.value;
    // novoQuizz.questions.length = qtde_pergunta.value;
    qtde_niveis = nivel.value;


    document.querySelector(".novo-quizz").style.display = "none";

    criarPerguntas(qtde_pergunta.value);

}


function criarPerguntas(qtde) {

    let respostasIncorretas = [];

    let montarQuestoes = `<div  class="criar-perguntas">
    <section>
            <div class="titulo-formulario"><h2>Crie Suas Perguntas</h2></div>
            <div class="questoes-formulario">`;
    for (let i = 0; i < qtde; i++) {
        montarQuestoes += `
                <div class="perguntas"> 
                    <span class="subtitulo-formulario editor">
                            <h5>Perguntas N${(i + 1)} </h5>`;
        if (i > 0) {
            montarQuestoes += `
                                        <ion-icon name="create-outline" onclick="exibirPerguntas(this)"></ion-icon></span>
                                        <div class="ocultar">`;
        } else {
            montarQuestoes += `</span><div>`;
        }
        montarQuestoes += `
                
                
                <input class="inputs" type="text" id="perguntas_quizz_${i + 1}" placeholder="Texto da pergunta" required>
                
                <input class="inputs" type="text" id="cor_quizz_${i + 1}" placeholder="Cor de Fundo da pergunta" required="">
                
                <span class="subtitulo-formulario"><h5>Resposta correta</h5></span>
                 <div class="alternativa-true">       
                    <input class="inputs" type="text" id="resposta_ok_${i + 1}" placeholder="Resposta correta" required>
                    <input class="inputs" type="text" id="url_imagem_resposta_1_${i + 1}" placeholder="URL da imagem" required>
                </div>
                <span class="subtitulo-formulario"><h5>Resposta incorretas</h5></span>`;

        respostasIncorretas[i] = 2;
        // respostasIncorretas[i] = prompt("Quantas repostas erradas para a " + (i + 1) + "º pergunta?");

        if (respostasIncorretas[i] > 0 && respostasIncorretas[i] < 4) {
            for (let j = 0; j < respostasIncorretas[i]; j++) {
                montarQuestoes += `
                        <div class="alternativa-false">
                            <input class="inputs" type="text" id="resposta_incorreta_${i}${j}" placeholder="Resposta incorreta 1" required>
                            <input class="inputs" type="text" id="url_imagem_resposta_${i}${j}" placeholder="URL da imagem 1" required>
                        </div>`;
            };
        } else {
            alert("Opcao Invalida");
            return;
        };
        erradas.push(respostasIncorretas[i]);

        montarQuestoes += `
                </div>
                </div>`;


    };
    montarQuestoes += `</div>
             <button class="botao-formulario" onclick="validarPasso2(${qtde})">Prosseguir pra criar perguntas</button>`;

    montarQuestoes += `</section>
    </div>`;

    document.body.innerHTML += montarQuestoes;


}

function exibirPerguntas(exibir) {

    exibir.parentElement.parentElement.children[1].classList.remove("ocultar");
}


function validarPasso2(qtde_pergunta) {

    for (let i = 0; i < qtde_pergunta; i++) {
        const respostaCorreta = {};

        novoQuizz.questions.push({ title:"", color:"", answers: [] });

        /*Para realizar validacao do passo 2 */
        novoQuizz.questions[i].title = "Quem gosta de ventilador?";
        novoQuizz.questions[i].color = "#FFF000";
        respostaCorreta.text = "Familia";
        respostaCorreta.image = "https://upload.wikimedia.org/wikipedia/pt/a/ac/Vegeta.jpg";
        respostaCorreta.isCorrectAnswer = true;
        /*
 
         if (document.getElementById("perguntas_quizz_" + (i + 1)).value.length < TAMANHOMINIMO) {
             alert("Seu titulo da pergunta " + (i + 1) + " não foi preenchido");
             document.getElementById("perguntas_quizz_" + (i + 1)).focus;
             return;
         } else {
             novoQuizz.questions[i].title = document.getElementById("perguntas_quizz_" + (i + 1)).value;
         }
 
 
         if (/^#[0-9A-F]{6}$/i.test(document.getElementById("cor_quizz_" + (i + 1)).value) == false) {
             alert("Cor invalida por favor informe uma cor no formato hexdecimal exemplo: #00FF00");
             document.getElementById("cor_quizz_" + (i + 1)).focus;
             return
         } else {
             novoQuizz.questions[i].color = document.getElementById("cor_quizz_" + (i + 1)).value;
         }
 
         //resposta certa
         if (document.getElementById("resposta_ok_" + (i + 1)).value.length === "") {
             alert("Não é permitido resposta vazia");
             document.getElementById("resposta_ok_" + (i + 1)).focus;
             return;
         } else {
             respostaCorreta.text = document.getElementById("resposta_ok_" + (i + 1)).value;
             
 
         }
 
         if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(document.getElementById("url_imagem_resposta_1_" + (i + 1)).value) == false) {
             alert("Endereço de imagem invalido");
             document.getElementById("url_imagem_resposta_1_" + (i + 1)).focus();
             return;
         } else {
             respostaCorreta.image = document.getElementById("url_imagem_resposta_1_" + (i + 1)).value;
         }
 */
        novoQuizz.questions[i].answers.push(respostaCorreta);



        //respostas erradas
        for (let j = 0; j < erradas[i]; j++) {
            const respostaInCorreta = {};
            respostaInCorreta.text = "Familia;";
            respostaInCorreta.image = "https://upload.wikimedia.org/wikipedia/pt/a/ac/Vegeta.jpg";
            respostaInCorreta.isCorrectAnswer = false;
            /*
                        if (document.getElementById(`resposta_incorreta_${i}${j}`).value.length === "") {
                            alert("Não é permitido resposta vazia");
                            document.getElementById(`resposta_incorreta_${i}${j}`).focus;
                            return;
                        } else {
                            
                            respostaInCorreta.text = document.getElementById(`resposta_incorreta_${i}${j}`).value;
                           
                        }
            
                        if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(document.getElementById(`url_imagem_resposta_${i}${j}`).value) == false) {
                            alert("Endereço de imagem invalido");
                            document.getElementById(`url_imagem_resposta_${i}${j}`).focus();
                            return;
                        } else {
                            respostaInCorreta.image = document.getElementById(`url_imagem_resposta_${i}${j}`).value;
                        }
                        */
            novoQuizz.questions[i].answers.push(respostaInCorreta);
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
            
                <input class="inputs" type="text" name="tx_titulo_nivel_${i + 1}" placeholder="Titulo do Nivel" required>

                <input class="inputs" type="text" name="porcentagem_acerto_${i + 1}"placeholder="Porcentagem de acerto mínima" required>

                <input class="inputs" type="text" name="url_imagem_nivel_${i + 1}" placeholder="Url da imagem do nível" required>

                <textarea class=" inputs inputs-txt" type="text" name="tx_textarea_nivel_${i + 1}" placeholder="Descrição do nível" required></textarea>

                
                </div>
                </div>`;


    };
    montarNiveis += `</div>
                     <button class="botao-formulario" onclick="validarPasso3(${qtde_niveis})">Finalizar Quizz</button>`;

    montarNiveis += `</section>
            </div>`;

    document.body.innerHTML += montarNiveis;
}


function validarPasso3(qtde) {
    for (let i = 0; i < qtde; i++) {
        novoQuizz.levels.push({ });
        let num = 25;
        novoQuizz.levels[i].title = "Você é o cara";
        novoQuizz.levels[i].image = "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/dragon-ball-super-1200x900-1.jpg";
        novoQuizz.levels[i].text = "Ondie fica o planeta Nobiru";
        novoQuizz.levels[i].minValue =Number(50);

        /*
        if (document.getElementById("tx_titulo_nivel_" + (i + 1)).value.length < 10) {
            alert("Seu titulo de nível " + (i + 1) + " não foi preenchido corretamente");
            document.getElementById("tx_titulo_nivel_" + (i + 1)).focus;
            return;
        } else {
            novoQuizz.levels[i].title = document.getElementById("tx_titulo_nivel_" + (i + 1)).value;
        }

        num = document.getElementById("porcentagem_acerto_" + (i + 1)).value;
        if (num < 0 && num > 100) {
            alert("Esse valor não foi preenchido corretamente");
            document.getElementById("porcentagem_acerto_" + (i + 1)).focus;
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
            document.getElementById("tx_textarea_nivel_" + (i + 1)).focus;
            return;
        } else {
            novoQuizz.levels[i].text = document.getElementById("tx_textarea_nivel_" + (i + 1)).value;
        }
        */

    }
    enviarQuizz(novoQuizz);

}

function enviarQuizz(objeto){

    document.querySelector(".decidir-niveis").style.display = "none";
    
    let objetoPostado={};

    
    axios.post('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes', objeto)
      .then(function (response) {
        objetoPostado = response.data;  
        idsDoUsuario.push(objetoPostado.id);
        // console.log(response);
      })
      .catch(function (error) {
          alert("algo deu errado"+error);
        console.log(error);
      });

    mostrarQuizz();

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
            <button class="reiniciar" onclick="acessarQuizz(this,0)">Acessar Quizz</button>
            <button class="voltar" onclick="voltarParaHome()">Voltar para Home</button>
    </div>
</section>  
</div>
`;
    document.body.innerHTML += mostrar_quizz;
}



//guardar id no localStorage

//mostrar a tela do seu quizz esta pronto

//atualizar GET da pagina inicial