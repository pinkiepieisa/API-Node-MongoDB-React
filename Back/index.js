const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8081;
const dormitorioController = require('./controllers/DormitorioControlls');
const alunaController = require('./controllers/AlunaControlls');

//Middleware para tratar JSON
app.use(bodyParser.json());

//Middleware para habilitar o CORS
app.use(cors());

//Rota de teste
app.get('/', (req, res) => res.send('Eu estou aqui!'));

//Rotas para os controllers
app.use('/dormitorio', dormitorioController);
app.use('/aluna', alunaController);

//Middleware para tratamento de erros global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

//Inicia o servidor na porta especificada
app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));