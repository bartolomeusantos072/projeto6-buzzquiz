let novoQuizz = { 
    title: null,
    image:null,
    questions:{},
    levels:{},
};


function criarQuizz() {

    document.body.innerHTML += `<div  class="novo-quizz">
    <section>
            <div class="titulo-formulario"><h2>Comece pelo começo</h2></div>
            
                <div class="questoes-formulario">

                    <input class="inputs" type="text" id="titulo_quizz" placeholder="Titulo do seu quizz" required>

                    <input class="inputs" type="text" id="url_imagem_quizz" placeholder="URL da imagem do seu quizz" required>

                    <input class="inputs" type="number" id="qtde_pergunta_quizz" min="3" placeholder="Quantidade de perguntas do quizz" required>

                    <input class="inputs" type="number" id="qtde_nivel_quizz" min="2" placeholder="Quantidade de níveis do quizz" required>
                    
                </div>
                <button class="botao-formulario" onclick="validarPasso1()">Prosseguir pra criar perguntas</button>
      </section>  
    </div>`;
}

function validarPasso1() {

    let titulo = document.getElementById("titulo_quizz");
    let url_imagem = document.getElementById("url_imagem_quizz");
    let qtde_pergunta = document.getElementById("qtde_pergunta_quizz");
    let nivel = document.getElementById("qtde_nivel_quizz");

    if (titulo.value.length < 20 || titulo.value.length > 65) {
        alert("O Titulo de quizz Invalido tente novamente");
        titulo.value="";
        titulo.focus();
        return;
    }
    if ( /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url_imagem.value) == false ){
        alert("Endereço de imagem invalido");
        url_imagem.focus();
        return;
    }

    if(qtde_pergunta.value < 3){
        alert("A quantidade de pergunta deve ser no mínimo 3!!");
        qtde_pergunta.value =3;
        qtde_pergunta.focus();
        return;
    }

    if(nivel.value < 2){
        alert("A quantidade de níveis deve ser no mínimo 2!!");
        nivel.value =2;
        nivel.focus();
        return;
    }
    // alert("Tudo ok");
    
    novoQuizz.title = titulo.value;
    novoQuizz.image = url_imagem.value;
    novoQuizz.questions.length = qtde_pergunta.value;
    novoQuizz.levels.length = nivel.value;
    document.querySelector(".novo-quizz").style.display ="none";
    

  /* isso é pra mexer com imagens. 
        let imageInput = document.getElementById("image-input");
        let image = document.getElementById("image");
        if (imageInput.value) image.src = imageInput.value;
  
    <input type="url" id="image-input">

    <img src="" id="image">
  */
  
    criarPerguntas(qtde_pergunta.value, nivel.value);

}


let teste;
function criarPerguntas(qtde,niveis) {

     let montarQuestoes = `<div  class="criar-perguntas">
    <section>
            <div class="titulo-formulario"><h2>Crie Suas Perguntas</h2></div>
            <div class="questoes-formulario">`;
            for(let i = 0; i < qtde; i++){
                montarQuestoes +=`
                <div class="perguntas"> 
                    <span class="subtitulo-formulario editor">
                            <h5>Perguntas N${(i+1)} </h5>`;
                if(i>0){
                    montarQuestoes+=`
                                        <ion-icon name="create-outline" onclick="exibirPerguntas(this)"></ion-icon></span>
                                        <div class="ocultar">`;
                    }else{
                        montarQuestoes+=`</span><div>`;
                    }
                    montarQuestoes+=`
                
                
                <input class="inputs" type="text" id="perguntas_quizz" placeholder="Texto da pergunta" required>
                
                <input class="inputs" type="text" id="cor_quizz" placeholder="Cor de Fundo da pergunta" required>
                
                <span class="subtitulo-formulario"><h5>Resposta correta</h5></span>

                <input class="inputs" type="text" id="resposta_ok" placeholder="Resposta correta" required>
                <input class="inputs" type="text" id="url_imagem_resposta_1" placeholder="URL da imagem" required>

                <span class="subtitulo-formulario"><h5>Resposta incorretas</h5></span>
                <input class="inputs" type="text" id="resposta_incorreta_1" placeholder="Resposta incorreta 1" required>
                <input class="inputs" type="text" id="url_imagem_resposta_2" placeholder="URL da imagem 1" required>

                <input class="inputs" type="text" id="tx_resposta_incorreta_2" placeholder="Resposta incorreta 2" required>
                <input class="inputs" type="text" id="url_imagem_resposta_3" placeholder="URL da imagem 2" required>

                <input class="inputs" type="text" id="resposta_incorreta_3" placeholder="Resposta incorreta 3" required>
                <input class="inputs" type="text" id="url_imagem_resposta_4" placeholder="URL da imagem 3" required>
                </div>
                </div>`;
                // if(i > 0){
                //     document.querySelector(".subtitulo-formulario").classList.add("editor");
                // }
                teste=montarQuestoes;

             };  
             montarQuestoes +=`</div>
             <button class="botao-formulario" onclick="validarPasso2()">Prosseguir pra criar perguntas</button>
    </section>
    </div>`;

    document.body.innerHTML +=montarQuestoes;

   
}

function exibirPerguntas(exibir){

    exibir.parentElement.parentElement.children[1].classList.remove("ocultar");
}


function validarPasso2() {


    let perguntas = document.getElementById("");
    // let =document.getElementById("");
    // let =document.getElementById("");

    alert("Tudo ok");
    // document.querySelector(".criar-perguntas").style.display = "none"
    // decidirNiveis();
}
/*
function decidirNiveis() {

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

function validarPasso3() {
    alert("Tudo ok");
    document.querySelector(".criar-perguntas").style.display = "none"
    cadastrarQuizz();
}

function cadastrarQuizz() {
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

function acessarQuizz() {

}
*/
    // let listadevalidacao = ['titulo_quizz','url_imagem_quizz','qtde_pergunta_quizz','qtde_nivel_quizz'];
    // for(let i=0;i<listadevalidacao.length;i++){
    //     console.log(document.getElementById(listadevalidacao[i]));
    //     if(document.getElementById(listadevalidacao[i]).value == ""){
    //         alert(listadevalidacao[i]+" não informado");
    //         listadevalidacao[i].focus();
    //         return;
    //     }
    // }