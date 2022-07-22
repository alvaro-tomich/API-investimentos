const express = require('express');

const router = express.Router();
const { purchase } = require('../controllers/purchases.controllers');
const validateToken = require('../middlewares/validateToken');
const validateBody = require('../middlewares/validateBody');
const transactionsSchema = require('../schemas/transactions.schema');

router.post('/investimentos/comprar', validateToken, validateBody(transactionsSchema), purchase);

module.exports = router;
