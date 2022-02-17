/*------------------------------ finalizar TELA 1 e iniciar TELA 2 ----------------------------------------*/

function selecionarQuizz(selecionado, num) {

    document.querySelector("main").style.display="none";

    urlImage = selecionado.style.backgroundImage.split('"')[1];

    document.body.innerHTML += `<div class="abrir-quiz">
    <section>
            <div class="banner" style=" background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${urlImage})">
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

let answers;

function exibirQuizz(num) {

    for (let i = 0; i < quizzesGame[num].questions.length; i++) {

        let montarQuizz = `<div class="jogo">
                                <div class="unico-jogo">
                                        <span class="titulo-quizz" 
                                        style="background-color: ${quizzesGame[num].questions[i].color}"><h3>${quizzesGame[num].questions[i].title}</h3></span>
                                    <div class="escolher-respostas" onclick="selectAnswer(this)">`;
                                        answers = quizzesGame[num].questions[i].answers;                  
                                        answers.sort();

                                        answers.forEach(answer => {
                                            
                                            montarQuizz += `<div class="imagem"> <img src=`+
                                                answer.image+">"+` <span class="resposta"><h4>${answer.text}</h4></span></div>`;
                                                console.log(answer.image);
                                                
                                        });
                    
            montarQuizz +=`         </div>
                                </div>                
                            </div>`;

        document.querySelector(".todos-games").innerHTML += montarQuizz;

    }

}

