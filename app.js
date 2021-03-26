const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/users.js');
const cronTask = require('./src/usersImportCron.js');
const config = require('./config.json');

const uri = config.mongodb.uri;

const app = express();

/*
https://lab.coodesh.com/public-challenges/back-end-challenge-2021
GET /: Retornar uma mensagem "REST Back-end Challenge 20201209 Running"
PUT /users/:userId: Será responsável por receber atualizações realizadas
DELETE /users/:userId: Remover o user da base
GET /users/:userId: Obter a informação somente de um user da base de dados
GET /users: Listar todos os usuários da base de dados
*/

mongoose.connect(uri,  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, () =>{
    console.log('connect to DB!');
})

cronTask.start();

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', async (req, res) => {
    res.status(200).send('REST Back-end Challenge 20201209 Running');
});

app.listen(3000);

module.exports = app;