const express = require('express');
const router = express.Router();
const EntradaController = require('../controllers/EntradaController.js');

// Rota para criar um novo produto
router.post('/entrada', EntradaController.createEntrada);

// Rota para obter todos os entradas
router.get('/entrada', EntradaController.getAllEntradas);

// Rota para obter um entrada pelo ID
router.get('/entrada/:id', EntradaController.getEntradaById);

// Rota para atualizar um entrada
router.put('/entrada/:id', EntradaController.updateEntrada);

// Rota para deletar um entrada
router.delete('/entrada/:id', EntradaController.deleteEntrada);

module.exports = router;