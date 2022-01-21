# myCommerce

<h3 align="center">

Projeto desenvolvido visando aplicar conceitos de banco de dados com Node.

</h3>


Video explicando o projeto: 

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
Para popular o banco com alguns dados como usuário, produto e categoria é necessário executar o comando de seed:
```sh
# Executar seeds para criar usuário, produto e categoria
$ npm run seed:admin
```
**Atenção**, o usuário criado será por padrão Administrador, o email será "admin@gmail.com" e a senha será  "admin"


Para rodar o projeto será necessário executar o seguinte comando:
```sh
$ npm start
```


### Utilizando o Server

```sh

# Executando a aplicação :
$ npm start

# Instanciando o banco de dados:
$ npm run migration:run

```
Para abrir a documentação da aplicação e conseguir interagir com as rotas é só acessar o endereço http://localhost:3333/api-docs/ com a aplicação rodando na máquina local.


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

