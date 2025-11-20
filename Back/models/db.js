const mongoose = require('mongoose');

//Conexão com o banco
mongoose.connect('mongodb://localhost:27017/Republica', {
});

//Obtendo a conexão padrão
const db = mongoose.connection;

//Listener de eventos para confirmar a erro na conexão com o banco
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB: '));

//Litener de eventos para confirmar que a conexão foi estabelecida
db.once('open', function() {
    console.log('Conexão com o banco estabelecida com sucesso!');
}); 

//Exportação da conexão com o banco
module.exports = db;
