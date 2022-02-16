let quizzes=[];

const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promise.then(obterQuizzes);
promise.catch(erroObterQuizzes);

function obterQuizzes(resposta) {
     quizzes = resposta.data;
     renderizarQuizzes(resposta.data);
     
}
function erroObterQuizzes(error){
    alert.error(error);
}

function renderizarQuizzes(lista){
    // console.log(resposta.data);
    console.log(lista[1]);
    for(let i=0;i<lista.length;i++){
        let montarQuizz =`<div class="quizz-item">
        ${lista[i].title} `;
        montarQuizz+=`<div>`;
        document.querySelector(".todos-quizzes").innerHTML+=montarQuizz;  
    }
}

// // criarQuiz(0);
// // let contador = 0;

// // function criarQuiz(num) {

// //     if (num > 0) {
// //         contador++;
// //     }
// //     console.log(contador);
// // }