const express = require('express');
const router = express.Router();
const SaidaController = require('../controllers/SaidaController');

// Rota para criar um novo produto
router.post('saida', SaidaController.createSaida);

// Rota para obter todos os saidas
router.get('/saida', SaidaController.getAllSaida);

// Rota para obter um saida pelo ID
router.get('/saida/:id', SaidaController.getSaidaById);

// Rota para atualizar um saida
router.put('/saida/:id', SaidaController.updateSaida);

// Rota para deletar um saida
router.delete('/saida/:id', SaidaController.deleteSaida);

module.exports = router;