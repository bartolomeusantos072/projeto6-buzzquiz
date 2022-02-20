function criarQuizz(){
    
    document.body.innerHTML += `<div  class="novo-quizz">
    <section>
            <div class="titulo-formulario"><h2>Comece pelo começo</h2></div>
            
                <form class="questoes-formulario" action="" method="post" name="dados" onSubmit="return enviarDados()" >

                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Titulo do seu quizz" required>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="URL da imagem do seu quizz" required>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Quantidade de perguntas do quizz" required>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Quantidade de níveis do quizz" required>
                    
                <form>
                <button class="botao-formulario" onclick="validarPasso1()">Prosseguir pra criar perguntas</button>
      </section>  
    </div>`;
}

function validarPasso1(){
    alert("Tudo ok");
    document.querySelector(".novo-quizz").style.display ="none"
    criarPerguntas();
}

function criarPerguntas(){

    document.body.innerHTML += `<div  class="criar-perguntas">
    <section>
            <div class="titulo-formulario"><h2>Crie Suas Perguntas</h2></div>
            
                <form class="questoes-formulario" action="" method="post" name="dados" onSubmit="return enviarDados()">
                    <span class="subtitulo-formulario"><h5>Perguntas Nº</h5></span>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Titulo do seu quizz" required>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Cord de Fundo da pergunta" required>
                    <span class="subtitulo-formulario"><h5>Resposta correta</h5></span>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Quantidade de perguntas do quizz" required>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Quantidade de níveis do quizz" required>
                    <span class="subtitulo-formulario"><h5>Resposta incorretas</h5></span>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Quantidade de perguntas do quizz" required>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Quantidade de níveis do quizz" required>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Quantidade de perguntas do quizz" required>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Quantidade de níveis do quizz" required>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Quantidade de perguntas do quizz" required>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Quantidade de níveis do quizz" required>
                    <span class="subtitulo-formulario editor"><h5>Pergunta Num tal</h5>
                    <ion-icon name="create-outline"></ion-icon>
                    </span>
                    <span class="subtitulo-formulario editor"><h5>Pergunta Num tals</h5>
                    <ion-icon name="create-outline"></ion-icon>
                    </span>


                <form>
                <button class="botao-formulario" onclick="validarPasso2()">Prosseguir pra criar perguntas</button>
      </section>  
    </div>`;
}


function validarPasso2(){
    alert("Tudo ok");
    document.querySelector(".criar-perguntas").style.display ="none"
    decidirNiveis();
}

function decidirNiveis(){

    document.body.innerHTML += `<div  class="decidir-niveis">
    <section>
            <div class="titulo-formulario"><h2>Agora, decida os níveis!</h2></div>
            
                <form class="questoes-formulario" action="" method="post" name="dados" onSubmit="return enviarDados()">
                    <span class="subtitulo-formulario"><h5>Nivel 1</h5></span>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Titulo do Nivel" required>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Porcentagem de acerto mínima" required>
                    <span class="subtitulo-formulario"><h5>Resposta correta</h5></span>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Url da imagem do nível" required>
                    <input class="inputs" type="text" name="tx_titulo_quizz" minlength="20" maxlength="65" placeholder="Descrição do nível" required>
                    <span class="subtitulo-formulario editor"><h5>Nível 2</h5>
                    <ion-icon name="create-outline"></ion-icon>
                    </span>
                    <span class="subtitulo-formulario editor"><h5>Nível 3</h5>
                    <ion-icon name="create-outline"></ion-icon>
                    </span>


                <form>
                <button class="botao-formulario" onclick="validarPasso3()">Prosseguir pra criar perguntas</button>
      </section>  
    </div>`;
}

function validarPasso3(){
    alert("Tudo ok");
    document.querySelector(".criar-perguntas").style.display ="none"
    cadastrarQuizz();
}

function cadastrarQuizz(){
    document.body.innerHTML += `<div  class="decidir-niveis">
    <section>
            <div class="titulo-formulario"><h2>Agora, decida os níveis!</h2></div>
            <div class="caixa-resultado">
                <div class="quizz-item" 
                    style="background-image: linear-gradient( 180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url('https://aventurasnahistoria.uol.com.br/media/_versions/entretenimento/bob_esponja_capa_widelg.jpg')">
                
                <span class="titulo-quizzes">
                        <h3>asdadadasdasdasdasdasdasdasdasdasdasdad</h3>
                </span>
                </div>
            </div>
            <div class="botao">
                <button class="reiniciar" onclick="acessarQuizz()">Acessar Quizz</button>
                <button class="voltar" onclick="voltarParaHome()">Voltar para Home</button>
            </div>   
            
    </section>
    <div>`;
}

function acessarQuizz(){
    
}