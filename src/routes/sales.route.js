const express = require('express');

const router = express.Router();
const { create } = require('../controllers/sales.controllers');
const validateToken = require('../middlewares/validateToken');
const validateBody = require('../middlewares/validateBody');
const transactionsSchema = require('../schemas/transactions.schema');

/**
 * @swagger
 *  tags:
 *      name: Vendas
 *      description: Endpoints de vendas de ativos
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Vendas:
 *            type: object
 *            required:
 *              - codCliente
 *              - codAtivo
 *              - qtdAtivo
 *            properties:
 *              codCliente:
 *                type: number
 *              codAtivo:
 *                type: number
 *              qtdAtivo:
 *                type: number
 *            example:
 *              codCliente: 3
 *              codAtivo: 1
 *              qtdAtivo: 1
 */

/**
 * @swagger
 *  /investimentos/vender:
 *    post:
 *      tags: [Vendas]
 *      description: Endpoint para vender um ativo
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Vendas'
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Vendas'
 */

router.post('/investimentos/vender', validateBody(transactionsSchema), validateToken, create);

module.exports = router;
