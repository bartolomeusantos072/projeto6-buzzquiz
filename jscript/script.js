const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promise.then(obterQuizzes)


function obterQuizzes(resposta) {
    console.log(resposta.data);
}

criarQuiz(0);
let contador = 0;

function criarQuiz(num) {

    if (num > 0) {
        contador++;
    }
    console.log(contador);
}