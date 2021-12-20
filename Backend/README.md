# myCommerce

<h3 align="center">

Projeto desenvolvido visando aplicar conceitos de banco de dados com Node.

</h3>

<h1 align="center">
  <img  src="https://github.com/Spinnafre/myCommerce/blob/main/showcase/game.gif" alt="gif do app" width=60% height=60%>
</h1>

Video explicando o projeto: https://www.youtube.com/watch?v=No81WSipttU

## **:computer: TECNOLOGIAS**

#### **Server** ([NodeJS][node])

  - **Express**
  - **CORS**
  - **PostgreSQL**
  - **TypeORM**
  - **Swagger**

## **:books: REFERÊNCIAS**
- [Express](https://expressjs.com/pt-br/)
- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [TypeORM](https://typeorm.io/#/)
- [Swagger](https://swagger.io)

## **:wine_glass: COMO UTILIZAR**

### Configurações Iniciais

Você precisa verificar se foi criado o banco de dados com nome 'myCommerce'

Depois de ter criado o banco de dados, é necessário clonar o repositório na máquina:
```sh
$ git clone https://github.com/Spinnafre/myCommerce.git
```

Você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Após ter o **Node** instalado, instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
# Node:
$ npm install 
```

Após instalar as dependências é necessário ir no arquivo `ormconfig.json` e alterar o username e password de acordo com o username e password do SGBD configurado na sua máquina

Após configurar o arquivo `ormconfig.json`, rode as migrations para criar o esquema do banco de dados da aplicação:

```sh
$ npm run migration:run
```

Para rodar o projeto será necessário executar o seguinte comando:
```sh
$ npm start
```
### Utilizando o Server

```sh

# Executando a aplicação:
$ npm start

# Instanciando o banco de dados:
$ npm run migration:run

```
Para abrir a documentação da aplicação e conseguir interagir com as rotas é só acessar o endereço http://localhost:3333/api-docs/ com a aplicação rodando na máquina local.

## **:star2: COLABORADOR**

<div align=center>

<table style="width:100%">
  <tr align=center>
    <th><strong>Davi Silva</strong></th>
  </tr>
  <tr align=center>
    <td>
      <a href="https://github.com/Spinnafre" target="_blank">
        <img width="200" src="https://avatars2.githubusercontent.com/u/61525268?s=460&u=b66a852f0a5808ec463be41555fe28c2ff6d3e1a&v=4">
      </a>
    </td>
  </tr>
</table>

</div>



<!-- Techs -->

[PostgreSQL]: https://www.postgresql.org

[node]: https://nodejs.org/en/

[vscode]: https://code.visualstudio.com/

[express]: https://expressjs.com/

[cors]: https://expressjs.com/en/resources/middleware/cors.html

[insomnia]: https://insomnia.rest/

[dotenv]: https://github.com/motdotla/dotenv

[Swagger]: https://swagger.io

[TypeORM]: https://typeorm.io/#/

[Swagger]: https://swagger.io

