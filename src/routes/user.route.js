const express = require('express');
const { create } = require('../controllers/users.controllers');

const router = express.Router();

router.post('/user', create);

module.exports = router;
