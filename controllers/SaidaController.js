const db = require('../firebaseConfig');

const SaidaController = {
    createSaida: async (req, res) => {
        try {
            const saidaRef = db.collection('saida').doc();
            await saidaRef.set(req.body);
            res.status(201).json({ id: saidaRef.id, ...req.body });
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllSaida: async (req, res) => {
        try {
            const saidasSnapshot = await db.collection('saida').get();
            const saida = [];
            saidasSnapshot.forEach(doc => {
                saida.push({ id: doc.id, ...doc.data() });
            });
            res.status(200).json(saida);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getSaidaById: async (req, res) => {
        try {
            const saidaRef = db.collection('saida').doc(req.params.id);
            const doc = await saidaRef.get();
            if (!doc.exists) {
                res.status(404).send('saida não encontrado');
            } else {
                res.status(200).json({ id: doc.id, ...doc.data() });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateSaida: async (req, res) => {
        try {
            const saidaRef = db.collection('saida').doc(req.params.id);
            await saidaRef.update(req.body);
            res.status(200).send('saida atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteSaida: async (req, res) => {
        try {
            const saidaRef = db.collection('saida').doc(req.params.id);
            await saidaRef.delete();
            res.status(200).send('saida deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = SaidaController;