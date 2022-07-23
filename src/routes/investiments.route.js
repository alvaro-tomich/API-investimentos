const express = require('express');

const router = express.Router();
const { getScripClient, getScrip, getScrips } = require('../controllers/investiments.controllers');
const validateToken = require('../middlewares/validateToken');

/**
 * @swagger
 *  tags:
 *      name: Investimentos e Ativos
 *      description: Endpoints de investimentos e ativos
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Investimentos:
 *            type: object
 *            required:
 *              - usuario
 *              - ativo
 *              - qtdAtivo
 *              - valor
 *            properties:
 *              usuario:
 *                type: number
 *              ativo:
 *                type: number
 *              qtdAtivo:
 *                type: number
 *              valor:
 *                type: number
 *            example:
 *              usuario: 3
 *              ativo: 1
 *              qtdAtivo: 1
 *              valor: 12.54
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Ativo:
 *            type: object
 *            properties:
 *              codAtivo:
 *                type: number
 *              nomeAtivo:
 *                type: string
 *              qtdAtivo:
 *                type: number
 *              total:
 *                type: number
 *            example:
 *              codAtivo: 1
 *              nomeAtivo: AZUL4
 *              qtdAtivo: 100
 *              valor: 12.54
 */

/**
  * @swagger
  *  /investimentos/{codCliente}:
  *    get:
  *      tags: [Investimentos e Ativos]
  *      description: Endpoint que retorna os investimentos do usuário
  *      security:
  *        - bearerAuth: []
  *      parameters:
  *        - in: path
  *          name: codCliente
  *          type: number
  *          required: true
  *      responses:
  *        200:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/Investimentos'
 */

router.get('/investimentos/:codCliente', validateToken, getScripClient);

/**
  * @swagger
  *  /ativos:
  *    get:
  *      tags: [Investimentos e Ativos]
  *      description: Endpoint que retorna os ativos
  *      security:
  *        - bearerAuth: []
  *      responses:
  *        200:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/Ativo'
 */

router.get('/ativos', validateToken, getScrips);

/**
  * @swagger
  *  /ativos/{codAtivo}:
  *    get:
  *      tags: [Investimentos e Ativos]
  *      description: Endpoint que retorna um ativo
  *      security:
  *        - bearerAuth: []
  *      parameters:
  *        - in: path
  *          name: codAtivo
  *          type: number
  *          required: true
  *      responses:
  *        200:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
  *                $ref: '#/components/schemas/Ativo'
 */

router.get('/ativos/:codAtivo', validateToken, getScrip);

module.exports = router;
