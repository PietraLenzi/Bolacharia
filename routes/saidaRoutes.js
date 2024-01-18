const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/SaidaController');

// Rota para criar um novo produto
router.post('saida', saidaController.createsaida);

// Rota para obter todos os saidas
router.get('/saida', saidaController.getAllsaidas);

// Rota para obter um saida pelo ID
router.get('/saida/:id', saidaController.getsaidaById);

// Rota para atualizar um saida
router.put('/saida/:id', saidaController.updatesaida);

// Rota para deletar um saida
router.delete('/saida/:id', saidaController.deletesaida);

module.exports = router;