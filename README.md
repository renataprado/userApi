
## Objetivos

Desenvolver uma REST API que:

- Tenha um sistema de atualização que uma vez ao dia importe dados da API Random User https://randomuser.me/api e grave no banco de dados.

    Cada usuário deve obrigatóriamente conter os seguintes campos:
    - imported_t: campo do tipo Date com a dia e hora que foi importado;
    - status: campo do tipo Enum com os possíveis valores draft, trash e published;

- Possua um CRUD com os seguintes endpoints:

   - `GET /`: Retornar uma mensagem "REST Back-end Challenge 20201209 Running"
   - `PUT /users/:userId`: Será responsável por receber atualizações realizadas
   - `DELETE /users/:userId`: Remover o user da base
   - `GET /users/:userId`: Obter a informação somente de um user da base de dados
   - `GET /users`: Listar todos os usuários da base de dados

## Tecnologias Utilizadas

- NodeJS
- MongoDB

## Install

Install dependencies

    npm install

Run unit tests

    npm test

Start development server

    npm start
    
  
