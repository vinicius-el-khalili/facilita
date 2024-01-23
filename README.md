# Como rodar o projeto localmente


# 1. PostgreSQL

Para a base de dados PostgreSQL, basta inicializar o PostgreSQL em sua máquina local e transferir suas configurações de acesso para as variáveis de ambiente em `@/backend/.env`. 

Inicialização (Ubuntu):
```
sudo service postgresql start
```

Variáveis de ambiente `@/backend/.env`
```.env
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DATABASE=clientdb_velkb
```

Nas variáveis de ambiente atuais, os atributos HOST, PORT, USER e PASSWORD estão configurados segundo os valores padrão do PostgreSQL. 
Todas as manipulações na base de dados (conexão com o PostgreSQL, criação da base de dados, schemas e tabelas) serão realizadas pelo servidor Node.
Os arquivos .sql contendo os scripts e DDLs utilizados na criação da base de dados, schemas e tabelas estão disponíveis em `@/database`.


# 2. Backend (Node.js)

Para inicializar o servidor Node.js, primeiro instale as depêndencias presentes em `@/backend/package.json`

#### @/backend/

```terminal
npm install
```
A seguir, inicie o servidor com o comando

#### @/backend/

```terminal
npm run server
```

![Alt Text](/readme_images/npm_run_server.png)

