//Importação da conexão com o mongo
const db = require('./db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Definindo o esquema do modelo Aluna
const AlunaSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    semestre: {
        type: Number,
        required: true
    },
    curso: {
        type: String,
        required: true
    }, 
    dormitorio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dormitorio',
        required: true
    }
}, { collection: 'Aluna' }); //Especifica o nome da collection

//Cria o modelo baseado no esquema
const Aluna = mongoose.model('Aluna', AlunaSchema);

//Exporta o modelo
module.exports = Aluna;