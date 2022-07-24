# Boas vindas ao projeto Api de Investimentos!

O presente projeto foi desenvolvido durante a participação do processo seletivo da XP.inc e teve como principal objetivo a construção de uma api semelhante ao dia dia na referenciada, uma aplicação de investimento em ações, com algumas funcionalidades de conta digital;


# Entregas

<details>
  <summary><strong> Desenvolvimento</strong></summary><br />

  Este projeto, foi desenvolvido tentando se apróximar ao máximo possível do funcionamento de uma api de investimentos, durante o processo foram utilizadas as seguintes tecnologias: NODE.js, sequelizeORM, JavaScript, Express e o banco estruturado com postgresSql hospedado pelo supabase.
  
  
  O projeto foi executado seguindo o padrão de arquitetura MSC, tentando aplicar os conceitos de REST, as validações foram realizadas com JOI e os testes foram executados com as bibliotecas Mocha e Chai, com o auxílio também da sequelize-test-helpers.



  ---

</details>

<details>
  <summary><strong> Período de entrega</strong></summary><br />
  
  * Este projeto foi individual
  * Foram `9` dias de projeto
  * Do dia `15/07/2022 09:00` ao dia: `24/07/2022 23:59`

</details>



# Orientações

<details>
  <summary><strong> Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

  > No terminal clone o repositório: `git clone git@github.com:alvaro-tomich/API-investimentos.git`.
  - Ao clonar o repositório entre nele utilizando o seguinte comando: `cd API-investimentos`.
  - Abra o vscode utilizando o seguinte comando: `code .`.

  > Renomeie o arquivo .envexample para .env e configure as variáveis de ambiente.
  - exemplo: PORT:3000, PASSWORD_POSTGRES:password;

  > No terminal do VSCode Rode o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `api-investimentos`.
  - Esse serviço irá inicializar um container do banco de dados.
  - A partir daqui você pode rodar o container `api-investimentos` via CLI.
  - Ao rodar o docker-compose vocẽ já consegue acessar o workbench mysql pela conexão via docker utilizando as variáveis de ambiente.
  - Ex: crie uma nova conexão no mysql workbench utilizando o password escolhido no .env, o host e a porta 3306;
  - Caso a conexão não funcione execute os dois próximos passos e volte nesse.


  > Use o comando: `docker exec -it api-investimentos bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`

  > Rode o comando `npx sequelize db:create && npx sequelize db:migrate && npx sequelize db:seed:all`
  - Esse comando irá criar e popular o banco de dados;
  - O seed de dados já possui 2 usuários por padrão;

  > Rode o comando `npm run dev`
  - Esse comando deixará a aplicação pronta para ser realizaro requisições.

---
  
  ## Sem Docker

  > No terminal clone o repositório: `git clone git@github.com:alvaro-tomich/API-investimentos.git`.
  - Ao clonar o repositório entre nele utilizando o seguinte comando: `cd API-investimentos`.
  - Abra o vscode utilizando o seguinte comando: `code .`.

  > Renomeie o arquivo .envexample para .env e configure as variáveis de ambiente.
  - exemplo: PORT:3000, PASSWORD_POSTGRES:password;
  
  > No terminal do VSCode rode o comando `npm install`

  > Crie uma nova conexão com o mysql workbench baseada nas suas variáveis de ambiente.

  > Rode o comando `npm run dev`
  - Esse comando deixará a aplicação pronta para ser realizado requisições.
  
  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  ✨ **Dica:** Recomenda-se a versão 16 ou superior do `node`, versão em que a aplicação foi desenvolvida.

  <br/>
</details>

<details>
  <summary><strong> Testes</strong></summary><br />

  Foram utilizadas as bibliotecas Mocha, chai e sinon para desenvolvimento dos testes unitários. 

  **_Para executar os testes localmente, digite no terminal o comando `npm test`._**

</details>


<details><summary><strong> Deploy da API</strong></summary><br />

  ## Heroku

  > O deploy da aplicação foi realizado utilizando o heroku`.
  - Voce pode utilizá-lo com o seguinte endereço: `https://api-investimentos.herokuapp.com/`.
  - A partir desse endereço você pode utilizá-lo no postman ou onde preferir realizar as requisições.

---
  
  ## Swagger

  > A Aplicação também está disponível no swagger onde há descrição de todos os endpoints`.
  - Acesse a partir do seguinte endereço: `https://api-investimentos.herokuapp.com/docs`.
  - Lembre-se de alterar o servidor de local para o servidor do heroku.

</details>

<details>
  <summary><strong> Mande seu feedback sobre o projeto!</strong></summary><br />

Gostaria primeiramente de agradacer a XP.inc pela oportunidade! Caso tenha feedbacks sobre o projeto entre em contato com o seguinte email: `alvaroramos222@hotmail.com`, estou sempre buscando melhorias então irei adorar ler e discutir sobre.


</details>
