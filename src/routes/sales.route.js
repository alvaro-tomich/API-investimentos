const express = require('express');

const router = express.Router();
const { create } = require('../controllers/sales.controllers');

router.post('/investimentos/vender', create);

module.exports = router;
