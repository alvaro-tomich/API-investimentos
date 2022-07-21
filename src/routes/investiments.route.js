const express = require('express');

const router = express.Router();
const { getScripClient } = require('../controllers/investiments.controllers');

router.get('/investimentos/:codCliente', getScripClient);

module.exports = router;
