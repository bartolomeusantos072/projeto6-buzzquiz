let contador = 1; // para mover o scroll;
let pontos =0; //pontos no jogo;

/*------------------------------ finalizar TELA 1 e iniciar TELA 2 ----------------------------------------*/


function selecionarQuizz(selecionado, item) {
    


    document.querySelector("main").style.display = "none";

    const urlImage = selecionado.style.backgroundImage.split('"')[1];

    document.body.innerHTML += `<div  class="abrir-quizz">
    <section id="reiniciar">
            <div class="banner" style =" background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${urlImage})">
                <h2 class="abrir-quiz-titulo">${selecionado.querySelector("span").innerText}</h2>
            </div>
            <div class="todos-games">
            </div>
    </section>
    </div>`;
    exibirQuizz(item);
    reiniciarQuizz(selecionado,item);
}

function comparador() {
    return Math.random() - 0.5;
}



function exibirQuizz(escolhido) {
    let montarQuizz=``;
    for (let i = 0; i < quizzesGame[escolhido].questions.length; i++) {

         montarQuizz += `<div class="jogo">
                                <div class="unico-jogo">
                                        <span class="titulo-quizz"
                                        style="background-color: ${quizzesGame[escolhido].questions[i].color}"><h3>${quizzesGame[escolhido].questions[i].title}</h3></span>
                                    <div class="perguntas">`;
        let answers = quizzesGame[escolhido].questions[i].answers;
        answers.sort(comparador);
        answers.forEach(answer => {
            let valor = answer.isCorrectAnswer;

            montarQuizz += `<div class="escolher-resposta `;
            if (answer.isCorrectAnswer) {
                montarQuizz += ` alternativa-true mascara `;
            } else {
                montarQuizz += ` alternativa-false mascara`;
            };

            montarQuizz += `" onclick="selectAnswer(this,${valor},${i},${escolhido})"> <img src=` +
                answer.image + ">" + ` <span class="texto-resposta"><h4>${answer.text}</h4></span></div>`;


        });


        montarQuizz += `         </div>
                                </div>
                            </div>`;

        

    };
    document.querySelector(".todos-games").innerHTML += montarQuizz;
}


let pontuacao;
function selectAnswer(cardEscolhido, logica, num, escolhido) {
    
    const proximoCard = cardEscolhido.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".jogo");
    const opcao = cardEscolhido.parentElement.querySelectorAll(".escolher-resposta");
    

    for (let i = 0; i < opcao.length; i++) {
        //esta condicional esta certa e completa
        if (opcao[i] != cardEscolhido) {
            opcao[i].classList.add("esbranquicado");

        }
        opcao[i].style.pointerEvents = "none";
        opcao[i].classList.toggle("mascara");
    }

    setTimeout(() => {
        let destion = proximoCard[num+1];
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
        resultadoPontuacao(escolhido, pontuacao);    
    };

}

function resultadoPontuacao(escolhido, pontuacao){
    
    let resultado=[];

    if(pontuacao < 50){
       resultado = quizzesGame[escolhido].levels[0];
    }else{
       resultado = quizzesGame[escolhido].levels[1];
    }
    let montarQuizz =`
    <div class="caixa-resultado">
            <div class="unico-jogo">
                    <span class="titulo-resultado">
                        <h3>${pontuacao}% de acerto: ${resultado.title}!</h3>
                    </span>
                <div class="resultado">
                    
                    <img src=` +
                    resultado.image + ">" + ` 
                    <span class="texto-resultado"><h4>${resultado.text}</h4></span>

            
       </div>
    </div>
    <div class="botao">
        <button class="reiniciar" onclick="reiniciarQuizz()">Reiniciar Quizz</button>
        <button class="voltar" onclick="voltarParaHome()">Voltar para Home</button>
    </div>
</div>
`;
    document.querySelector(".todos-games").innerHTML += montarQuizz;

    const resultadoCard = document.querySelector(".caixa-resultado");
    setTimeout(() => {
        let destion = resultadoCard;
        destion.scrollIntoView({
            behavior: 'smooth'
        });
    }, 2000);
}

function reiniciarQuizz(){
    document.getElementById("reiniciar").scrollIntoView({
        behavior: 'smooth'
    });
    
    pontuacao = 0;
    
    
    let removerResultado =document.querySelector(".titulo-resultado").parentNode.parentNode;
    removerResultado.parentNode.removeChild(removerResultado);
    
    // window.reload.href = "#reiniciar";
    let cards=document.querySelectorAll(".escolher-resposta") 
    for(let i=0;i<cards.length;i++){
        // cards[i].classList.toggle("alternativa-false");
        // cards[i].classList.toggle("alternativa-true");
        cards[i].classList.toggle("mascara");
        cards[i].classList.remove("esbranquicado");
        cards[i].style.pointerEvents = "visible";
    }
    // selectAnswer(cardEscolhido, logica, num, escolhido)

}

function voltarParaHome(){
    location.reload();
}