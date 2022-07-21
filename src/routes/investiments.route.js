const express = require('express');

const router = express.Router();
const { getScripClient, getScrip } = require('../controllers/investiments.controllers');

router.get('/investimentos/:codCliente', getScripClient);
router.get('/ativos/:codAtivo', getScrip);

module.exports = router;
