const express = require('express');

const router = express.Router();
const { purchase } = require('../controllers/purchases.controllers');
const validateToken = require('../middlewares/validateToken');
const validateBody = require('../middlewares/validateBody');
const transactionsSchema = require('../schemas/transactions.schema');

/**
 * @swagger
 *  tags:
 *      name: Compras
 *      description: Endpoints de compras de ativos
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Compras:
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
 *  /investimentos/comprar:
 *    post:
 *      tags: [Compras]
 *      description: Endpoint para comprar um ativo
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Compras'
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Compras'
 */

router.post('/investimentos/comprar', validateToken, validateBody(transactionsSchema), purchase);

module.exports = router;
