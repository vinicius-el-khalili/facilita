# Como rodar o projeto localmente


# 1. PostgreSQL

Para a base de dados PostgreSQL, tudo o que você precisa fazer é inicializar o PostgreSQL em sua máquina local e transferir suas configurações e credenciais para as variáveis de ambiente em `@/backend/.env`. 

Inicialização (Ubuntu):

    sudo service postgresql start

Variáveis de ambiente(`@/backend/.env`)

    POSTGRES_HOST=localhost
    POSTGRES_PORT=5432
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=postgres
    POSTGRES_DATABASE=clientdb_velkb

* Instalar e inicializar o backend
    * check
    * check

* Instalar e inicializar o front end
    * check
    * check
