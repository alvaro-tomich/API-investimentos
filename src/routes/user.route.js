const express = require('express');
const {
  create, remove, deposit, withdraw, getAccount, login,
} = require('../controllers/users.controllers');

const router = express.Router();
const validateToken = require('../middlewares/validateToken');

router.post('/user', create);
router.post('/conta/deposito', validateToken, deposit);
router.post('/conta/saque', validateToken, withdraw);
router.get('/conta/:codCliente', validateToken, getAccount);
router.post('/login', login);
router.delete('/user/:id', validateToken, remove);

module.exports = router;
