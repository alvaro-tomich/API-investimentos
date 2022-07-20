const express = require('express');
const { create, remove } = require('../controllers/users.controllers');

const router = express.Router();

router.post('/user', create);
router.delete('/user/:id', remove);

module.exports = router;
