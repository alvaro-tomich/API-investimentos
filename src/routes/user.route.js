const express = require('express');
const {
  create, remove, deposit, withdraw, getAccount, login,
} = require('../controllers/users.controllers');

const router = express.Router();
const validateToken = require('../middlewares/validateToken');
const userSchema = require('../schemas/user.schema');
const loginSchema = require('../schemas/login.schema');
const DWSchema = require('../schemas/deposit.withdraw.schema');
const validateBody = require('../middlewares/validateBody');

/**
 * @swagger
 *  tags:
 *      name: Usuários
 *      description: Endpoints de usuário
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Criar Usuário:
 *                 type: object
 *                 required:
 *                     - nome
 *                     - senha
 *                     - email
 *                     - rua
 *                     - numero
 *                     - bairro
 *                     - cidade
 *                     - estado
 *                 properties:
 *                     codUsuario:
 *                         type: number
 *                     nome:
 *                         type: string
 *                     senha:
 *                         type: string
 *                     email:
 *                         type: string
 *                     rua:
 *                         type: string
 *                     numero:
 *                         type: number
 *                     bairro:
 *                         type: string
 *                     cidade:
 *                         type: string
 *                     estado:
 *                         type: string
 *                 example:
 *                     nome: Yusuke
 *                     senha: keiko1
 *                     email: yusuke@bol.com.br
 *                     rua: Avenida Brasil
 *                     numero: 2323
 *                     bairro: Centro
 *                     cidade: Governador Valadares
 *                     estado: MG
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Login:
 *            type: object
 *            required:
 *              - nome
 *              - senha
 *            properties:
 *              nome:
 *                type: string
 *              senha:
 *                type: string
 *            example:
 *              nome: Yusuke
 *              senha: keiko1
 */

/**
 * @swagger
 *  /user:
 *    post:
 *      tags: [Usuários]
 *      description: Endpoint para cadastro de usuário
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Criar Usuário'
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 */
router.post('/user', validateBody(userSchema), create);

/**
  * @swagger
  *  /login:
  *    post:
  *      tags: [Usuários]
  *      description: Endpoint para realizar login
  *      requestBody:
  *        required: true
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              $ref: '#/components/schemas/Login'
  *      responses:
  *        200:
  *          content:
  *            application/json:
  *              schema:
  *                type: object
 */

router.post('/login', validateBody(loginSchema), login);

/**
  * @swagger
  *  /user/{id}:
  *    delete:
  *      tags: [Usuários]
  *      description: Endpoint que deleta um usuário
  *      security:
  *        - bearerAuth: []
  *      parameters:
  *        - in: path
  *          name: id
  *          type: number
  *          required: true
  *      responses:
  *        204:
  *         description: Usuario deletado com sucesso!.
 */

router.delete('/user/:id', validateToken, remove);

/**
 * @swagger
 *  tags:
 *      name: Conta
 *      description: Endpoints de conta
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          Deposito e Saque:
 *            type: object
 *            required:
 *              - codCliente
 *              - valor
 *            properties:
 *              codCliente:
 *                type: number
 *              valor:
 *                type: number
 *            example:
 *              codCliente: 3
 *              valor: 30
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *         Conta:
 *           type: object
 *           properties:
 *             codConta:
 *               type: number
 *             saldo:
 *               type: number
 *             usuario:
 *               type: number
 *           example:
 *               codConta: 3
 *               saldo: 350
 *               usuario: 3
 */

/**
 * @swagger
 *  /conta/deposito:
 *    post:
 *      tags: [Conta]
 *      description: Endpoint para depósito na conta do usuário
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Deposito e Saque'
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 */

router.post('/conta/deposito', validateToken, validateBody(DWSchema), deposit);

/**
 * @swagger
 *  /conta/saque:
 *    post:
 *      tags: [Conta]
 *      description: Endpoint para saque na conta do usuário
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Deposito e Saque'
 *      responses:
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 */

router.post('/conta/saque', validateToken, validateBody(DWSchema), withdraw);

/**
  * @swagger
  *  /conta/{codCliente}:
  *    get:
  *      tags: [Conta]
  *      description: Endpoint que retorna a conta do usuário
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
  *                $ref: '#/components/schemas/Conta'
 */
router.get('/conta/:codCliente', validateToken, getAccount);

module.exports = router;
