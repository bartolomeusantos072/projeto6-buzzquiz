let idsDoUsuario = [];


const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promise.then(obterQuizzes);
promise.catch(erroObterQuizzes);

function obterQuizzes(resposta) {
    //Deve ser criado um filtro para ver se o id do usuario é diferente dos demais para então exibir a lista de quizzes ;
    //  let todosQuizzes, meusQuizzes;
    //  renderizarQuizzes(resposta.data,".seus-quizzes");   
    renderizarQuizzes(resposta.data, ".todos-quizzes");

}
function erroObterQuizzes(error) {
    alert.error(error);
}

let quizzes = [];
let quizzesGame = [];
function renderizarQuizzes(lista, container) {

    quizzesGame = lista;

    for (let i = 0; i < lista.length; i++) {

        let montarListaQuizz = `<div class="quizz-item" onclick="quizzSelecionado(this,${i})"
        style="background-image: 
            linear-gradient( 180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%),
             url('${lista[i].image}')"
        >
        <span class="titulo-quizzes">
        
        ${lista[i].title}</span> `;
        montarListaQuizz += `<div>`;
        document.querySelector(container).innerHTML += montarListaQuizz;




    }

    quizzes = document.querySelectorAll(".quizz-item");

    // for(let i=0;i<quizzes.length;i++){
    //     quizzes[i].style.backgroundImage = `url('${lista[i].image}')`;
    // }
}




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
                                        <span class="titulo-quizz" style="
                                        background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5), ${quizzesGame[num].questions[i].color})">${quizzesGame[num].questions[i].title}</span>
                                    <div class="imagens-respostas" onclick="">`;
                                    let answers = quizzesGame[num].questions[i].answers;                  
                                        answers.sort();
                                        answers.forEach(answer => {
                                            montarQuizz += `
                                                <div class="imagem"> <img src=${ answer.image}/> <span class="resposta"><h3>${answer.text}</h3></span></div>`;
                                                
                                                
                                        });
                    
            montarQuizz +=`         </div>
                                </div>                
                            </div>`;

        document.querySelector(".todos-games").innerHTML += montarQuizz;

    }

}

function comparador() { 
	return Math.random() - 0.5; 
}


