## Descrição

Trata-se de uma API que realiza um CRUD de tarefas, que apresentam nome, conteúdo, data de criação e o autor.

## Instalação

A tabela 'tasks' poderá ser criada utilizando o comando a seguir:

```bash
CREATE TABLE tasks (
	id int (11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	content VARCHAR (255) NULL,
	creationdate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	author VARCHAR(255) NOT NULL);
```

Após baixar a aplicação, é necessário colocar as informações do banco de dados em arquivo '.env', seguindo o exemplo:

```bash
DB_PORT=3306
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=todolist
```

Utilizando o comando a seguir, serão instaladas as dependências da aplicação:

```bash
$ npm install
```

## Executando a aplicação

A aplicação poderá ser executada utilizando o seguinte comando:

```bash
# watch mode
$ npm run start:dev
```

## Fluxo da aplicação

Após executar a aplicação, acesse a página a seguir:

```bash
http://localhost:3000/graphql
```

### Adicionando tarefas

Para adicionar uma tarefa, execute a seguinte mutation:

```bash
mutation{create(createTaskData: {
  name: "Nome",
  content: "Conteúdo",
	author: "Autor"
}){
  id,
  name,
  content,
  creationdate,
  author
}}
```

### Resgatar tarefas

Para resgatar tarefas, utilize a seguinte query:

```bash
{findAll{
  id,
  name,
  content,
  creationdate,
  author
	}
}
```

### Modificando tarefas

Para atualizar o conteúdo das tarefas, use a mutation conforme o exemplo:

```bash
mutation{update(updateTaskData: {
  id: 1,
  name: "Novo nome",
  content: "Novo conteúdo"})
  {
  id,
  name,
  content,
  creationdate,
  author
}}
```

### Apagando tarefas

Caso o desejo seja deletar uma tarefa, faça uso da mutation:

```bash
mutation {
  delete(deleteTaskData: {id: 1}){
    name,
    content,
    creationdate,
    author
  }
}
```

