let contador = 1; // para mover o scroll;
let pontos =0; //pontos no jogo;

/*------------------------------ finalizar TELA 1 e iniciar TELA 2 ----------------------------------------*/

function selecionarQuizz(selecionado, num) {

    document.querySelector("main").style.display = "none";

    const urlImage = selecionado.style.backgroundImage.split('"')[1];

    document.body.innerHTML += `<div class="abrir-quizz">
    <section>
            <div class="banner" style =" background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${urlImage})">
                <h2 class="abrir-quiz-titulo">${selecionado.querySelector("span").innerText}</h2>
            </div>
            <div class="todos-games">
            </div>
    </section>
    </div>`;
    exibirQuizz(num);

}

function comparador() {
    return Math.random() - 0.5;
}


// let quizzes = [];
function exibirQuizz(num) {

    for (let i = 0; i < quizzesGame[num].questions.length; i++) {

        let montarQuizz = `<div class="jogo">
                                <div class="unico-jogo">
                                        <span class="titulo-quizz"
                                        style="background-color: ${quizzesGame[num].questions[i].color}"><h3>${quizzesGame[num].questions[i].title}</h3></span>
                                    <div class="perguntas">`;
        let answers = quizzesGame[num].questions[i].answers;
        answers.sort(comparador);
        answers.forEach(answer => {
            let valor = answer.isCorrectAnswer;

            montarQuizz += `<div class="escolher-resposta `;
            if (answer.isCorrectAnswer) {
                montarQuizz += ` alternativa-true mascara `;
            } else {
                montarQuizz += ` alternativa-false mascara`;
            };

            montarQuizz += `" onclick="selectAnswer(this,${valor},${i})"> <img src=` +
                answer.image + ">" + ` <span class="texto-resposta"><h4>${answer.text}</h4></span></div>`;


        });


        montarQuizz += `         </div>
                                </div>
                            </div>`;

        document.querySelector(".todos-games").innerHTML += montarQuizz;

    }

}





// let teste = [];
// let texto = [];

function selectAnswer(cardEscolhido, logica, num) {

    const proximoCard = cardEscolhido.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".jogo");
    const opcao = cardEscolhido.parentElement.querySelectorAll(".escolher-resposta");
    const pontuacao;

    for (let i = 0; i < opcao.length; i++) {
        //esta condicional esta certa e completa
        if (opcao[i] != cardEscolhido) {
            opcao[i].classList.add("esbranquicado");

        }
        opcao[i].style.pointerEvents = "none";
        opcao[i].classList.remove("mascara");
    }

    setTimeout(() => {
        let destion = proximoCard[num];
        destion.scrollIntoView({
            behavior: 'smooth'
        });
    }, 2000);

    //criar logica do jogo
    if(logica == true){
        pontos++;
    }
    if((num+1) == proximoCard.length){
        pontuacao=((pontos*100)/(num+1)).toFixed(2);
        pontuacao =Math.round(pontuacao);
        resultadoPontuacao(pontuacao);    
    };

}

function resultadoPontuacao(pontuacao){
    alert(pontuacao);
    // let montarResultado = `<div class="caixa-resultado"></div>`
    
}