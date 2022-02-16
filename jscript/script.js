let idsDoUsuario=[];


const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promise.then(obterQuizzes);
promise.catch(erroObterQuizzes);

function obterQuizzes(resposta) {
     //Deve ser criado um filtro para ver se o id do usuario é diferente dos demais para então exibir a lista de quizzes ;
     let todosQuizzes, meusQuizzes;
     renderizarQuizzes(resposta.data,".seus-quizzes");   
     renderizarQuizzes(resposta.data,".todos-quizzes");
     
}
function erroObterQuizzes(error){
    alert.error(error);
}
let quizzes=[];
function renderizarQuizzes(lista, container){
   
    
    for(let i=0;i<lista.length;i++){
        
        let montarQuizz =`<div class="quizz-item" onclick="QuizzSelecionado(this)"
        style="background-image: linear-gradient(
            180deg
            , rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url('${lista[i].image}')"
        >
        <span class="titulo-quizz">
        
        ${lista[i].title}</span> `;
        montarQuizz+=`<div>`;
        document.querySelector(container).innerHTML+=montarQuizz;
        

                                 
    }
    
}