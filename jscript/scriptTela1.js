// let idsDoUsuario = [];


const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promise.then(obterQuizzes);
promise.catch(erroObterQuizzes);

function obterQuizzes(resposta) {
    //Deve ser criado um filtro para ver se o id do usuario é diferente dos demais para então exibir a lista de quizzes ;
    //  let todosQuizzes, meusQuizzes;
    //  renderizarListaQuizzes(resposta.data,".seus-quizzes");   
    renderizarListaQuizzes(resposta.data, ".todos-quizzes");

}
function erroObterQuizzes(error) {
    alert.error(error);
}


let quizzesGame = [];
function renderizarListaQuizzes(lista, container) {

    quizzesGame = lista;

    for (let i = 0; i < lista.length; i++) {

        let montarListaQuizz = `<div class="quizz-item" onclick="selecionarQuizz(this,${i})"
        style="background-image: 
            linear-gradient( 180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%),
             url('${lista[i].image}')"
        >
        <span class="titulo-quizzes"><h3>
        
        ${lista[i].title}</h3></span> `;
        montarListaQuizz += `<div>`;
        document.querySelector(container).innerHTML += montarListaQuizz;

    }

  
}





