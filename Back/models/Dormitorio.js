//Importação da conexão com o mongo
const db = require('./db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Definindo o esquema do modelo Aluna
const DormitorioSchema = new Schema({
    andar: {
        type: Number,
        required: true
    },
    porta: {
        type: Number,
        required: true
    }
}, { collection: 'Dormitorio '}); //Especifica o nome da coleção

//Cria o modelo com base no esquema
const Dormitorio = mongoose.model("Dormitorio", DormitorioSchema);

//Exporta o modelo
module.exports = Dormitorio;
