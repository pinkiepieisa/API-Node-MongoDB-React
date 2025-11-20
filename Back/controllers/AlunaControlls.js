const express = require('express');
const router = express.Router();
const Aluna = require('../models/Aluna');

//Busca todas as alunas (GET)
router.get('/', async (req, res) => {
    try {
        const alunas = await Aluna.find();
        res.status(200).json(alunas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Cadastrar uma nova aluna (POST)
router.post('/', async (req, res) => {
    try {
        const { nome, idade, cpf, semestre, curso, dormitorio } = req.body;
        const newAluna = new Aluna({ nome, idade, cpf, semestre, curso, dormitorio });
        await newAluna.save();
        res.status(201).json({ message: 'Cadastro feito com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Busca uma aluna por ID (GET)
router.get('/:id', async (req, res) => {
    try {
        const aluna = await Aluna.findById(req.params.id);
        res.status(200).json(aluna);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Deleta uma aluna por ID (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        await Aluna.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Excluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Alterar a aluna por ID (PUT)
router.put('/:id', async (req, res) => {
    try {
        const { nome, idade, cpf, semestre, curso, dormitorio } = req.body;
        await Aluna.findByIdAndUpdate(req.params.id, { nome, idade, cpf, semestre, curso, dormitorio });
        res.status(200).json({ message: 'Atualizado com sucesso! '});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;