const express = require('express');
const router = express.Router();
const Dormitorio = require('../models/Dormitorio');

//Busca todos os dormitórios (GET)
router.get('/', async (req, res) => {
    try {
        const dormitorios = await Dormitorio.find();
        res.status(200).json(dormitorios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Cadastrar um novo dormitório (POST)
router.post('/', async (req, res) => {
    try {
        const { andar, porta } = req.body;
        const newDormitorio = new Dormitorio({ andar, porta });
        await newDormitorio.save();
        res.status(201).json({ message: 'Cadastro feito com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Busca um dormitorio por ID (GET)
router.get('/:id', async (req, res) => {
    try {
        const dormitorio = await Dormitorio.findById(req.params.id);
        res.status(200).json(dormitorio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Deleta um dormitorio por ID (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        await Dormitorio.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Excluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Alterar o dormitório por ID (PUT)
router.put('/:id', async (req, res) => {
    try {
        const { andar, porta } = req.body;
        await Dormitorio.findByIdAndUpdate(req.params.id, { andar, porta });
        res.status(200).json({ message: 'Atualizado com sucesso! '});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;