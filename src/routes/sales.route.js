const express = require('express');

const router = express.Router();
const { create } = require('../controllers/sales.controllers');
const validateToken = require('../middlewares/validateToken');
const validateBody = require('../middlewares/validateBody');
const transactionsSchema = require('../schemas/transactions.schema');

router.post('/investimentos/vender', validateBody(transactionsSchema), validateToken, create);

module.exports = router;
