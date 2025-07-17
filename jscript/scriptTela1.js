const 
    QUANTIDADEPERGUNTAS = 3,
    NIVELPERGUNTAS = 3,       
    TAMANHOMINIMO = 10,
    TAMANHOMAXIMO = 65;



const novoQuizz = {
    title: "",
    image: "",
    questions: [],
    levels: [],
};

let qtde_niveis=0;

let idsDoUsuario = [];

function criarQuizz() {
    document.body.innerHTML += `
    <div class="novo-quizz">
        <section>
            <div class="titulo-formulario"><h2>Comece pelo começo</h2></div>
            <div class="questoes-formulario">
                <input class="inputs" type="text" id="titulo_quizz" placeholder="Título do seu quizz" required>
                <input class="inputs" type="text" id="url_imagem_quizz" placeholder="URL da imagem do seu quizz" required>
                <input class="inputs" type="number" id="qtde_pergunta_quizz" min="${QUANTIDADEPERGUNTAS}" placeholder="Quantidade de perguntas do quizz" required>
                <input class="inputs" type="number" id="qtde_nivel_quizz" min="${NIVELPERGUNTAS}" placeholder="Quantidade de níveis do quizz" required>
            </div>
            <button class="botao-formulario" onclick="validarPasso1()">Prosseguir pra criar perguntas</button>
        </section>  
    </div>`;
}

async function obterQuizzes() {
    try {
        const resposta = await fetch("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
        
        // Verificando se a resposta foi bem-sucedida (status 200)
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const quizzes = await resposta.json();
        
        // Filtro para ver se o id do usuário é diferente dos demais e renderizar a lista de quizzes
        // Aqui você pode adicionar a lógica para separar os quizzes do usuário dos outros (se necessário)
        renderizarListaQuizzes(quizzes, ".todos-quizzes");
        
    } catch (error) {
        erroObterQuizzes(error);
    }
}

function erroObterQuizzes(error) {
    alert(`Erro ao obter quizzes: ${error.message}`);
}

let quizzesGame = [];

function renderizarListaQuizzes(lista, container) {
    quizzesGame = lista;

    // Limpando o conteúdo atual do container antes de adicionar os novos quizzes
    document.querySelector(container).innerHTML = '';

    // Criando os itens da lista de quizzes
    lista.forEach((quizz, index) => {
        let montarListaQuizz = `
            <div class="quizz-item" onclick="selecionarQuizz(this, ${index})"
                style="background-image: 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%),
                    url('${quizz.image}')">
                <span class="titulo-quizzes">
                    <h3>${quizz.title}</h3>
                </span>
            </div>`;
        
        document.querySelector(container).innerHTML += montarListaQuizz;
    });
}

// Chamando a função para obter os quizzes assim que a página carrega
obterQuizzes();
