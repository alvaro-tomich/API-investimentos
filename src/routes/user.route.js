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

router.post('/user', validateBody(userSchema), create);
router.post('/conta/deposito', validateToken, validateBody(DWSchema), deposit);
router.post('/conta/saque', validateToken, validateBody(DWSchema), withdraw);
router.get('/conta/:codCliente', validateToken, getAccount);
router.post('/login', validateBody(loginSchema), login);
router.delete('/user/:id', validateToken, remove);

module.exports = router;
