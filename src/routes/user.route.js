const express = require('express');
const { create, remove, deposit } = require('../controllers/users.controllers');

const router = express.Router();

router.post('/user', create);
router.post('/conta/deposito', deposit);
router.delete('/user/:id', remove);

module.exports = router;
