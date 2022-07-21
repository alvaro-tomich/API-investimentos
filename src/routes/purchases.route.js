const express = require('express');

const router = express.Router();
const { purchase } = require('../controllers/purchases.controllers');
const validateToken = require('../middlewares/validateToken');

router.post('/investimentos/comprar', validateToken, purchase);

module.exports = router;
