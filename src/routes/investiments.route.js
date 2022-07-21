const express = require('express');

const router = express.Router();
const { getScripClient, getScrip, getScrips } = require('../controllers/investiments.controllers');

router.get('/investimentos/:codCliente', getScripClient);
router.get('/ativos', getScrips);
router.get('/ativos/:codAtivo', getScrip);

module.exports = router;
