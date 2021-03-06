const { sql,poolPromise } = require('../database/db')
const express = require('express');
const userController = require('../controllers/userController')
const playerController = require('../controllers/playerController')
const acomodaController = require('../controllers/acomodaController')
const conceptoController = require('../controllers/conceptoController')
const tienditaController = require ('../controllers/tienditaController')

const router = express.Router();
router.get('/api/getUsuarios', userController.getUsuarios);
router.get('/api/getUsuario/:id', userController.getUsuario);
router.get('/api/getUserbyEmail/:email', userController.getUserbyEmail);
router.post('/api/addUsuario', userController.addUsuario);
router.post('/api/createUser', userController.createUser);
router.put('/api/updateUsuario/:id', userController.updateUsuario);
router.put('/api/updateAdmin/:nombre', userController.updateAdmin);
router.get('/api/getRanking', playerController.getRanking);
router.get('/api/getJugador/:id', playerController.getJugador);
router.put('/api/updatePlayer/:id', playerController.updatePlayer);
router.get('/api/cargaAcomoda/:id_proceso', acomodaController.cargaAcomoda);
router.get('/api/getConceptos', conceptoController.getConceptos);
router.post('/api/addConcepto', conceptoController.addConcepto);
router.post('/api/getItems', tienditaController.getItems);
router.post('/api/addItem', tienditaController.addItem);
router.get('/test', async (req, res) =>
{
        try {
            const pool = await poolPromise
            const result = await pool.request()
            .query("select * from [dbo].[Usuario]")
            res.json(result.recordset)
        } catch (error) {
          res.status(500)
          res.send(error.message)
        }
})

module.exports = router;