const express = require('express');
const {
  create, remove, deposit, withdraw, getAccount, login,
} = require('../controllers/users.controllers');

const router = express.Router();

router.post('/user', create);
router.post('/conta/deposito', deposit);
router.post('/conta/saque', withdraw);
router.get('/conta/:codCliente', getAccount);
router.post('/login', login);
router.delete('/user/:id', remove);

module.exports = router;
