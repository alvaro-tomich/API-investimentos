const express = require('express');

const router = express.Router();
const { purchase } = require('../controllers/purchases.controllers');

router.post('/investimentos/comprar', purchase);

module.exports = router;
