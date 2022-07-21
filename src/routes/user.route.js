const express = require('express');
const {
  create, remove, deposit, withdraw,
} = require('../controllers/users.controllers');

const router = express.Router();

router.post('/user', create);
router.post('/conta/deposito', deposit);
router.post('/conta/saque', withdraw);
router.delete('/user/:id', remove);

module.exports = router;
