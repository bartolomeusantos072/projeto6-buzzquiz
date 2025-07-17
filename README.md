Claro! Aqui está uma versão mais focada em uma apresentação profissional para recrutadores, destacando suas habilidades e os detalhes do projeto:

---

# **BuzzQuizz - Projeto de Quiz em HTML, CSS e JavaScript**

## 📝 **Descrição do Projeto**

O **BuzzQuizz** é um sistema de criação e interação com quizzes, onde os usuários podem criar seus próprios quizzes, responder aos quizzes de outros usuários e visualizar os resultados em tempo real. O projeto foi desenvolvido com HTML, CSS e JavaScript puro, sem a utilização de frameworks ou bibliotecas externas, exceto para requisições à API através do **Axios**.

Este projeto foi desenvolvido como parte de um desafio técnico, com foco na implementação de uma aplicação completa de front-end com comunicação assíncrona com o back-end através de uma API fornecida, que é responsável por persistir as informações dos quizzes.

---

## 🚀 **Tecnologias Utilizadas**

* **HTML5**: Estruturação semântica da página.
* **CSS3**: Estilização com foco em responsividade e aplicação do layout conforme especificado.
* **JavaScript (ES6)**: Lógica de interação com o usuário e manipulação dinâmica dos quizzes.
* **Axios**: Biblioteca para realizar requisições HTTP ao back-end.
* **LocalStorage**: Para persistência dos quizzes criados pelo usuário no armazenamento local.
* **Git & GitHub**: Controle de versão e deploy do projeto.

---

## 🖥️ **Funcionalidades Principais**

1. **Tela Inicial - Lista de Quizzes**:

   * Exibição dos quizzes criados pelo usuário e de quizzes públicos.
   * Funcionalidade de acessar qualquer quiz e responder as perguntas.
   * Opção de criar um novo quiz.

2. **Página do Quizz - Respostas e Resultado**:

   * Exibição dinâmica das perguntas e respostas com feedback visual (cor de fundo, respostas corretas/erradas).
   * Sistema de navegação entre perguntas.
   * Exibição da pontuação final após a conclusão do quiz, com o nível atingido e a descrição correspondente.

3. **Tela de Criação de Quizz**:

   * Passo a passo para criação de quizzes:

     * **Informações Básicas**: Título, imagem e quantidade de perguntas e níveis.
     * **Perguntas**: Criação de perguntas com múltiplas respostas, incluindo validações de conteúdo e formato.
     * **Níveis**: Definição dos níveis de acerto com imagens, descrição e porcentagem mínima de acerto.
   * Validações de dados para garantir a integridade das informações inseridas.

4. **Validações e Feedback**:

   * Validação de entradas em todas as etapas de criação de quizzes, garantindo que os dados atendem aos requisitos de formato e conteúdo.
   * Mensagens de alerta para dados inválidos ou ausentes.

---

## ⚙️ **Como Funciona**

* **API**: A aplicação interage com uma API externa para obter quizzes e salvar os quizzes criados pelo usuário.
* **Comunicação Assíncrona**: Utiliza **Axios** para requisições `GET`, `POST`, `PUT` e `DELETE` à API.
* **LocalStorage**: Ao criar um quiz, o ID gerado é armazenado localmente, permitindo que o usuário acesse e diferencie os quizzes que ele criou.

---

## 📱 **Responsividade**

A aplicação foi desenvolvida com um design **responsivo**, utilizando técnicas de **CSS Flexbox** e **Media Queries** para garantir que o layout seja adaptável em dispositivos móveis e desktop. O layout foi inspirado em um protótipo fornecido, com foco na experiência do usuário.

---

## ✅ **Requisitos Técnicos Atendidos**

* **Desenvolvimento com JavaScript puro**: O projeto foi desenvolvido sem bibliotecas além do **Axios**.
* **Validações de entrada**: Campos de texto, URLs e números são validados antes de avançar para a próxima etapa.
* **Responsividade**: Implementação do layout em diferentes resoluções, adaptando-se automaticamente.
* **Persistência de dados**: Uso de LocalStorage para armazenar quizzes criados localmente.

---

## 🎯 **Desafios e Soluções**

Durante o desenvolvimento do projeto, encontrei alguns desafios técnicos que exigiram um aprofundamento nos seguintes tópicos:

1. **Validação de Entradas**:

   * Implementação das diversas validações nas telas de criação de quizzes para garantir que os dados estejam corretos antes de serem enviados à API. Para isso, usei expressões regulares para validar URLs e técnicas de verificação de valores em campos numéricos.

2. **Interação Assíncrona com a API**:

   * Utilização do **Axios** para lidar com as requisições assíncronas de forma eficiente, proporcionando uma boa experiência de usuário, com feedback visual de loading durante o processo de carregamento ou envio de dados.

3. **Gerenciamento de Estado no Front-end**:

   * O gerenciamento de quizzes criados pelo usuário foi feito com **LocalStorage**, permitindo que o usuário visualize seus quizzes mesmo após atualizar ou recarregar a página.

4. **Design Responsivo**:

   * Adaptar o layout para funcionar perfeitamente em diferentes tamanhos de tela, seguindo o padrão de design estabelecido no protótipo Figma.

---

## 🎨 **Design & Interface**

O design foi criado para ser simples e direto, priorizando a funcionalidade e a experiência do usuário. A interface foi desenhada de acordo com as diretrizes de layout fornecidas (Figma), garantindo uma boa usabilidade em dispositivos móveis e desktop.

---

## 🚧 **Bônus Implementados**

* **Tela de Loading**: Adição de uma tela de loading durante as interações com a API para melhorar a UX.
* **Edição e Exclusão de Quizzes**: Funcionalidade para editar ou excluir quizzes criados pelo usuário.
* **Validação de Erros de Entrada**: Mensagens de erro específicas para cada campo quando a entrada não atende aos requisitos.

---

## 🔗 **Links Úteis**

* **Repositório no GitHub**: [Link para o repositório](https://github.com/bartolomeusantos072/-buzzquiz)
* **Deploy no GitHub Pages**: [Acesse o projeto em produção](https://bartolomeusantos072.github.io/buzzquiz/)

---

## 💡 **O que eu aprendi**

* Aperfeiçoei minhas habilidades em **JavaScript** puro, com foco em manipulação do DOM e lógica assíncrona.
* Aprofundei o conhecimento sobre **validação de dados** no front-end e a interação com APIs externas.
* Aprendi a desenvolver de maneira **responsiva** e a aplicar **CSS Flexbox** e **Media Queries** para criar um layout que se adapta a diferentes dispositivos.

---

## 💬 **Próximos Passos**

Para as próximas iterações, planejo adicionar as seguintes funcionalidades:

* **Implementação de autenticação** para salvar os quizzes associados a uma conta de usuário.
* **Melhorias na interface** com animações para transições entre telas e feedback visual aprimorado.
* **Testes unitários** e **end-to-end** para garantir a integridade das funcionalidades.

---

## 👨‍💻 **Contato**

* **LinkedIn**: [Seu LinkedIn](https://www.linkedin.com/in/bartolomeusantos072)
* **Email**: [seunome@email.com](mailto:bartolomeu072@email.com)

---

