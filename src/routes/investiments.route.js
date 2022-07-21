const express = require('express');

const router = express.Router();
const { getScripClient, getScrip, getScrips } = require('../controllers/investiments.controllers');
const validateToken = require('../middlewares/validateToken');

router.get('/investimentos/:codCliente', validateToken, getScripClient);
router.get('/ativos', validateToken, getScrips);
router.get('/ativos/:codAtivo', validateToken, getScrip);

module.exports = router;
