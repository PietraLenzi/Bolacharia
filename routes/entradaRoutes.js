const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/EntradaController');

// Rota para criar um novo produto
router.post('entrada', entradaController.createentrada);

// Rota para obter todos os entradas
router.get('/entrada', entradaController.getAllentradas);

// Rota para obter um entrada pelo ID
router.get('/entrada/:id', entradaController.getentradaById);

// Rota para atualizar um entrada
router.put('/entrada/:id', entradaController.updateentrada);

// Rota para deletar um entrada
router.delete('/entrada/:id', entradaController.deleteentrada);

module.exports = router;