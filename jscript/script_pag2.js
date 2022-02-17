

function quizzSelecionado(selecionado, num) {
    

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
    quizzesJogos(num);

}


function quizzesJogos(num) {

    for (let i = 0; i < quizzesGame[num].questions.length; i++) {

        let montarQuizz = `<div class="jogo">
                                <div class="unico-jogo">
                                        <span class="titulo-quizz" style="background-color:${quizzesGame[num].questions[i].color}">${quizzesGame[num].questions[i].title}</span>
                                    <div class="imagens-respostas" onclick="">`;
                                    let answers = quizzesGame[num].questions[i].answers;                  
                                        // answers.sort();
                                        answers.forEach(answer => {
                                            montarQuizz += `
                                                <div class="imagem"> <img src=${ answer.image}/> <span class="resposta">${answer.text}</span></div>`;
                                                
                                                
                                        });
                    
            montarQuizz +=`         </div>
                                </div>                
                            </div>`;

        document.querySelector(".todos-games").innerHTML += montarQuizz;

    }

}


