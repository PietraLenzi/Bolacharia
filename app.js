const express = require('express');
const app = express();

// Configuração do Firebase
const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\pietra_lenzi\\Desktop\\BolachariaApi\\serviceAccountKey.json');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importar rotas
const produtosRoutes = require('./routes/produtosRoutes');
const entradaRoutes = require('./routes/entradaRoutes');
const saidaRoutes = require('./routes/saidaRoutes');

// Usar rotas
app.use('/api', produtosRoutes);
app.use('/api', entradaRoutes);
app.use('/api', saidaRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));