const express = require('express');

const router = express.Router();
const { create } = require('../controllers/sales.controllers');
const validateToken = require('../middlewares/validateToken');

router.post('/investimentos/vender', validateToken, create);

module.exports = router;
