# Backend Node.js para Sistema de Gerenciamento de Produtos

Este é o backend desenvolvido em Node.js para um sistema de gerenciamento de produtos. Ele fornece uma API RESTful para operações CRUD (Create, Read, Update, Delete) de produtos, bem como funcionalidades de registro e login de usuários.

## Funcionalidades Implementadas

- **API de Registro e Login:** O backend oferece endpoints para registro e login de usuários.

- **API RESTful para Produtos:** Uma API RESTful é disponibilizada para realizar operações CRUD de produtos.

- **Express.js para Roteamento:** O roteamento da aplicação é feito usando o framework Express.js.

- **Sequelize para Interação com Banco de Dados:** O Sequelize é utilizado para interagir com o banco de dados.

- **Postgres do Vercel como Banco de Dados:** O Postgres hospedado no Vercel é utilizado como banco de dados.

- **Rotas com Autorização:** Rotas exclusivas são expostas para permitir que clientes externos consumam e insiram produtos, com autenticação.

## Configuração e Uso

1. **Clonando o Repositório:**
git clone https://github.com/andre09999/apiProducts.git
cd apiProducts

2. **Instalando Dependências:**
npm install


3. **Configurando Variáveis de Ambiente:**
Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, como as credenciais do banco de dados e as chaves de autenticação.

4. **Iniciando o Servidor de Desenvolvimento:**
npm run dev

O servidor estará disponível em [http://localhost:3000](http://localhost:3000).
foi feito deploy em [https://apiproducts-rij8.onrender.com](https://apiproducts-rij8.onrender.com)
## Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize
- Postgres


## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias, correções ou novas funcionalidades.

