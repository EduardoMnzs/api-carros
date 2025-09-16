# API de Gerenciamento de Carros

Esta é uma API RESTful desenvolvida em Node.js para realizar operações de CRUD (Create, Read, Update, Delete) em um banco de dados de carros. O projeto utiliza uma arquitetura MVC (Model-View-Controller) para organização e escalabilidade.

A API foi construída com as seguintes tecnologias:

  - **Node.js**: Ambiente de execução JavaScript.
  - **Express**: Framework para criação do servidor e gerenciamento de rotas.
  - **PostgreSQL**: Banco de dados relacional.
  - **Sequelize**: ORM (Object-Relational Mapper) para interagir com o PostgreSQL.
  - **Swagger**: Para documentação e teste interativo dos endpoints da API.

## Funcionalidades

  - **CRUD Completo**: Crie, liste, busque por ID, atualize e delete carros.
  - **Arquitetura MVC**: Código organizado, separando a lógica de negócio, o acesso a dados e as rotas.
  - **Integração com PostgreSQL**: Persistência de dados robusta utilizando um banco de dados relacional.
  - **Documentação Interativa**: Todos os endpoints são documentados e podem ser testados diretamente pela interface do Swagger.

-----

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

  - [Node.js](https://nodejs.org/en/) (v18.x ou superior)
  - [NPM](https://www.npmjs.com/) (geralmente instalado com o Node.js)
  - [PostgreSQL](https://www.postgresql.org/download/) (instalado e rodando localmente ou em um container Docker)
  - [Git](https://git-scm.com/)

-----

## Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de desenvolvimento local.

**1. Clone o repositório:**

```bash
git clone https://github.com/EduardoMnzs/api-carros
cd api-carros
```

**2. Instale as dependências do projeto:**

```bash
npm install
```

**3. Configure as Variáveis de Ambiente:**
Crie uma cópia do arquivo de exemplo `.env.example` e renomeie-o para `.env`.

```bash
# Windows
copy .env.example .env

# MacOS/Linux
cp .env.example .env
```

Agora, abra o arquivo `.env` e preencha com as suas credenciais do PostgreSQL e a porta desejada para a API:

```ini
# .env

# Configurações do Banco de Dados
DB_HOST=DB_HOST
DB_USER=DB_USER
DB_PASSWORD=DB_PASSWORD
DB_NAME=DB_NAME
DB_DIALECT=DB_DIALECT

# Porta da Aplicação
PORT=5000
```

**4. Crie o Banco de Dados:**
Certifique-se de que o seu servidor PostgreSQL está em execução. Em seguida, crie um banco de dados com o mesmo nome que você definiu na variável `DB_NAME` (neste exemplo, `carros_db`).

> **Nota:** Você só precisa criar o banco de dados. O Sequelize se encarregará de criar a tabela `Cars` automaticamente quando a aplicação for iniciada pela primeira vez.

-----

## Executando a Aplicação

Para iniciar o servidor em modo de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
```

Este comando utiliza o `nodemon` para iniciar o servidor, que irá reiniciar automaticamente sempre que uma alteração for detectada nos arquivos do projeto.

Se tudo correr bem, você verá a seguinte saída no terminal:

```
[nodemon] starting `node src/server.js`
Conexão com o banco de dados estabelecida com sucesso.
Servidor rodando na porta 5000
Documentação da API disponível em http://localhost:5000/api-docs
```

-----

## Documentação da API (Swagger)

Com o servidor em execução, você pode acessar a documentação interativa da API no seu navegador:

**URL:** [http://localhost:5000/api-docs](https://www.google.com/search?q=http://localhost:5000/api-docs)

Na interface do Swagger, você poderá visualizar todos os endpoints disponíveis, seus parâmetros, os corpos de requisição esperados e os possíveis códigos de resposta. Além disso, você pode testar cada endpoint diretamente pelo navegador.

-----

## Estrutura do Projeto

O projeto segue a arquitetura MVC para uma melhor organização do código:

```
/node-api-carros
|-- /src
|   |-- /config
|   |   |-- database.js       # Configuração da conexão Sequelize
|   |   |-- swagger.js        # Configuração do Swagger
|   |-- /controllers
|   |   |-- carController.js  # Lógica de negócio da aplicação
|   |-- /models
|   |   |-- carModel.js       # Definição da tabela e colunas (Schema)
|   |-- /routes
|   |   |-- carRoutes.js      # Definição dos endpoints da API
|   |-- app.js                # Arquivo principal do Express (middlewares e rotas)
|   |-- server.js             # Ponto de entrada para iniciar o servidor
|-- .env                      # Arquivo com as variáveis de ambiente (local)
|-- .env.example              # Arquivo de exemplo para as variáveis de ambiente
|-- package.json
|-- README.md                 # Esta documentação
```

## Conclusão

Este projeto oferece uma base sólida para o gerenciamento de carros utilizando Node.js, Express e PostgreSQL, com código organizado e documentação acessível. Sinta-se à vontade para contribuir, sugerir melhorias ou adaptar a API conforme suas necessidades.